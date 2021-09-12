import { Panel } from './Panel';
import { createInstance } from './createInstance';
import { IBlock, IBlockData, BasicType } from 'easy-email-editor';
import { CustomBlocksType } from '../constants';
import { Section, Column, Image, Button } from 'easy-email-editor';
import React from 'react';

export type ICustomHeader = IBlockData<
  {
    'background-color': string;
    'text-color': string;
    'button-width': number;
  },
  {
    buttonText: string;
    imageUrl: string
  }
>;

const transform = (data: ICustomHeader) => {
  const { imageUrl, buttonText } = data.data.value;
  const attributes = data.attributes;

  const instance = (
    <Section padding="20px">
      <Column>
        <Image padding="0px 0px 0px 0px" width="100px" src={imageUrl} />
        <Button width={attributes['button-width'] + 'px'} background-color={attributes['background-color']} color={attributes['text-color']} href="#">
          {buttonText}
        </Button>
      </Column>
    </Section>
  )
  return instance;
};

export const MyFirstBlock: IBlock = {
  name: 'My first block',
  type: CustomBlocksType.MY_FIRST_BLOCK as any,
  Panel,
  createInstance,
  validParentType: [BasicType.PAGE, BasicType.WRAPPER],
  transform,
};
