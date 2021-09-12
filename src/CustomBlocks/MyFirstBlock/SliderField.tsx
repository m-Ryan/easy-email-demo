
import { Slider } from 'antd';
import { SliderSingleProps } from 'antd/lib/slider';
import { debounce } from 'lodash';
import React, { useCallback } from 'react';
import { useField, useForm } from 'react-final-form';

export interface SliderProps extends Omit<SliderSingleProps, 'onChange'> {
  name: string;
}

export function SliderField(props: SliderProps) {
  const { name } = props;
  const { change } = useForm();
  const {
    input: { value, onBlur },
  } = useField(name);

  const onFieldChange = useCallback(
    debounce((value: number) => {
      console.log({ value });

      change(name, value);
      onBlur();
    }),
    [change, name, onBlur]
  );

  return <Slider
    {...props}
    value={value}
    onChange={onFieldChange}
  />;
}

