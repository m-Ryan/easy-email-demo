/* eslint-disable react/jsx-wrap-multilines */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Button, message, PageHeader } from 'antd';
import mjml from 'mjml-browser';

import {
  EmailEditor,
  EmailEditorProvider,
  transformToMjml,
  IEmailTemplate,
  BlocksMap,
  Stack,
} from 'easy-email-editor';
import 'easy-email-editor/lib/style.css';
import 'antd/dist/antd.css';

import templateData from './template.json'
import { customBlocks } from './CustomBlocks';
import { useImportTemplate } from './hooks/useImportTemplate';
import { useExportTemplate } from './hooks/useExportTemplate';
import { copy } from './urils/clipboard';


const fontList = [
  'Arial',
  'Tahoma',
  'Verdana',
  'Times New Roman',
  'Courier New',
  'Georgia',
  'Lato',
  'Montserrat',
  '黑体',
  '仿宋',
  '楷体',
  '标楷体',
  '华文仿宋',
  '华文楷体',
  '宋体',
  '微软雅黑',
].map(item => ({ value: item, label: item }));

export default function Editor() {
  const [downloadFileName, setDownloadName] = useState('download.mjml');
  const [template, setTemplate] = useState<IEmailTemplate['content']>(BlocksMap.getBlock('Page').create({
    data: {
      value: {
        "content-background-color": '#ffffff'
      }
    }
  }));
  const { importTemplate } = useImportTemplate();
  const { exportTemplate } = useExportTemplate();

  const extraBlocksList = useMemo(() => {
    return [customBlocks,];
  }, []);

  const onCopyHtml = (values: IEmailTemplate) => {
    const html = mjml(transformToMjml({
      data: values.content,
      mode: 'production',
      context: values.content
    }), {
      beautify: true,
      validationLevel: 'soft',
    }).html;

    copy(html);
    message.success('Copied to pasteboard!')
  };

  const onImportMjml = async () => {
    try {
      const [filename, data] = await importTemplate();
      setDownloadName(filename);
      setTemplate(data);
    } catch (error) {
      message.error('Invalid mjml file');
    }
  };

  const onExportMjml = (values: IEmailTemplate) => {
    exportTemplate(
      downloadFileName,
      transformToMjml({
        data: values.content,
        mode: 'production',
        context: values.content
      }))
  };

  const initialValues: IEmailTemplate | null = useMemo(() => {
    return {
      subject: 'Welcome to Easy-email',
      subTitle: 'Nice to meet you!',
      content: template
    };
  }, [template]);


  if (!initialValues) return null;

  return (
    <div>
      <EmailEditorProvider
        data={initialValues}
        extraBlocks={extraBlocksList}
        // onUploadImage={services.common.uploadByQiniu}
        interactiveStyle={{
          hoverColor: '#E058AF',
          selectedColor: '#13c2c2',
        }}
        autoComplete
        fontList={fontList}
        onSubmit={() => { }}
      >
        {({ values }, { submit }) => {
          return (
            <>
              <PageHeader
                title='Edit'
                extra={
                  <Stack alignment="center">
                    <Button onClick={() => onCopyHtml(values)}>
                      Copy Html
                    </Button>
                    <Button onClick={() => onExportMjml(values)}>
                      Export Template
                    </Button>
                    <Button onClick={onImportMjml}>
                      import Template
                    </Button>
                  </Stack>
                }
              />
              <EmailEditor height={'calc(100vh - 85px)'} />
            </>
          );
        }}
      </EmailEditorProvider>
    </div>
  );
}
