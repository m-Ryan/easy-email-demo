import React from 'react';
import { ColorPickerField, TextField, useFocusIdx, Stack, ImageUploaderField } from 'easy-email-editor';

export function Panel() {
  const { focusIdx } = useFocusIdx();
  return (
    <Stack vertical>
      <TextField
        label='Button text'
        name={`${focusIdx}.data.value.buttonText`}
        inline
        alignment='center'
      />

      // If you want to upload image, you should provide `onUploadImage` to `EmailEditorProvider`
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
  );
}
