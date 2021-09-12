import React from 'react';
import { Collapse } from 'antd';
import { ColorPickerField, TextField, useFocusIdx, Stack, ImageUploaderField } from 'easy-email-editor';
import { SliderField } from './SliderField';
const AntdPanel = Collapse.Panel;


export function Panel() {
  const { focusIdx } = useFocusIdx();
  return (
    <Stack vertical>


      <Collapse defaultActiveKey={['1', '2']}>
        <AntdPanel header="Color Setting" key="1">

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
        </AntdPanel>
        <AntdPanel header="Typography" key="2">
          <Stack vertical>
            <TextField
              label='Button text'
              name={`${focusIdx}.data.value.buttonText`}
              inline
              alignment='center'
            />
            <Stack.Item />
            <Stack vertical spacing="none">
              <div>Button width </div>
              <SliderField min={100} max={200} marks={{ 100: '100px', 200: '200px' }} name={`${focusIdx}.attributes.button-width`} />
            </Stack>
          </Stack>
        </AntdPanel>
      </Collapse>

    </Stack>
  );
}
