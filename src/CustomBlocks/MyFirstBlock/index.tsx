import { Panel } from './Panel';
import { createInstance } from './createInstance';
import { IBlock, IBlockData, BasicType } from 'easy-email-editor';
import { CustomBlocksType } from '../constants';
import { Section, Column, Image, Button } from 'easy-email-editor';
import React from 'react';
import { merge } from 'lodash';

export type ICustomHeader = IBlockData<
  {
    'background-color': string;
    'text-color': string;
  },
  {
    buttonText: string;
    imageUrl: string
  }
>;

export const MyFirstBlock: IBlock = {
  name: 'My first block',
  type: CustomBlocksType.MY_FIRST_BLOCK as any,
  Panel,
  create(
    payload
  ) {
    const defaultData: ICustomHeader = {
      type: CustomBlocksType.MY_FIRST_BLOCK as any,
      data: {
        value: {
          buttonText: 'Got it',
          imageUrl: 'https://assets.maocanhua.cn/10dada65-c4fb-4b1f-837e-59a1005bbea6-image.png'
        },
      },
      attributes: {
        'background-color': '#4A90E2',
        'text-color': '#ffffff',
      },
      children: [],
    };
    return merge(defaultData, payload);
  },
  validParentType: [BasicType.PAGE, BasicType.WRAPPER],
  render(data: ICustomHeader) {
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
  },
};
