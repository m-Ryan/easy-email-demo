/* eslint-disable react/jsx-wrap-multilines */
import React, { useCallback, useEffect, useMemo } from 'react';
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
import { FormikHelpers } from 'formik';

import template from './template.json'
import { customBlocks } from './CustomBlocks';

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

  const extraBlocksList = useMemo(() => {
    return [customBlocks,];
  }, []);

  const onSubmit = useCallback(
    async (values: IEmailTemplate, helper: FormikHelpers<IEmailTemplate>) => {
      console.log('onSubmit', values);
    }, []);

  const onExportHtml = (values: IEmailTemplate) => {
    const html = mjml(transformToMjml(values.content), {
      beautify: true,
      validationLevel: 'soft',
    }).html;

    console.log('onExportHtml', html);
  };

  const initialValues: IEmailTemplate | null = useMemo(() => {
    return {
      subject: 'Welcome to Easy-email',
      subTitle: 'Nice to meet you!',
      content: template // BlocksMap.getBlock('Page').createInstance({}),
    };
  }, []);


  if (!initialValues) return null;

  return (
    <div>
      <EmailEditorProvider
        data={initialValues}
        extraBlocks={extraBlocksList}
        // onUploadImage={services.common.uploadByQiniu}
        interactiveStyle={{
          hoverColor: '#3b97e3',
          selectedColor: '#69c0ff',
          dragoverColor: '#13c2c2',
          tangentColor: '#E058AF',
        }}
        fontList={fontList}
        onSubmit={onSubmit}
      >
        {({ values }, { submit }) => {
          return (
            <>
              <PageHeader
                title='Edit'
                extra={
                  <Stack alignment="center">
                    <Button onClick={() => onExportHtml(values)}>
                      Export html
                    </Button>

                    <Button
                      type='primary'
                      onClick={() => submit()}
                    >
                      Save
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
