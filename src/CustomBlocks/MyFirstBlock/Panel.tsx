import React from 'react';
import { ColorPickerField, TextField, ImageUploaderField, AttributesPanelWrapper } from 'easy-email-extensions';
import { useFocusIdx, Stack, } from 'easy-email-editor'
import { Collapse } from 'antd';

export function Panel() {
  const { focusIdx } = useFocusIdx();
  return (
    <AttributesPanelWrapper>
      <Collapse defaultActiveKey={['1']}>
        <Collapse.Panel key='1' header='Setting'>
          <Stack vertical>
            <TextField
              label='Button text'
              name={`${focusIdx}.data.value.buttonText`}
              inline
              alignment='center'
            />

            {/* // If you want to upload image, you should provide `onUploadImage` to `EmailEditorProvider` */}
            <ImageUploaderField
              label='Logo'
              name={`${focusIdx}.data.value.imageUrl`}
              inline
              alignment='center'
            />

            <ColorPickerField
              label='text color'
              name={`${focusIdx}.attributes.text-color`}
              inline
              alignment='center'
            />

            <ColorPickerField
              label='Background color'
              name={`${focusIdx}.attributes.background-color`}
              inline
              alignment='center'
            />
          </Stack>
        </Collapse.Panel>
      </Collapse>

    </AttributesPanelWrapper>

  );
}
