import { Panel } from './Panel';
import { createInstance } from './createInstance';
import { IBlock, IBlockData, BasicType } from 'easy-email-editor';
import { CustomBlocksType } from '../constants';
import { Section, Column, Image, Button } from 'easy-email-editor';
import React from 'react';

export type IMySecondBlock = IBlockData<
  {
    'background-color': string;
    'text-color': string;
  },
  {
    buttonText: string;
    imageUrl: string
  }
>;

const transform = (data: IMySecondBlock) => {
  const { imageUrl, buttonText } = data.data.value;
  const attributes = data.attributes;

  const instance = (
    <Section padding="20px">
      <Column>
        <Image padding="0px 0px 0px 0px" width="100px" src={imageUrl} />
        <Button background-color={attributes['background-color']} color={attributes['text-color']} href="#">
          {buttonText}
        </Button>
      </Column>
    </Section>
  )
  return instance;
};

export const MySecondBlock: IBlock = {
  name: 'My second block',
  type: CustomBlocksType.MY_SECOND_BLOCK as any,
  Panel,
  createInstance,
  validParentType: [BasicType.PAGE, BasicType.WRAPPER],
  transform,
};
