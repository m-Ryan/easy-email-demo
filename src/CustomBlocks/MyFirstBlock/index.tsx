import { IBlock, IBlockData, BasicType, components } from 'easy-email-core';
import { CustomBlocksType } from '../constants';
import React from 'react';
import { merge } from 'lodash';

const { Section, Column, Image, Button } = components;

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
  type: CustomBlocksType.MY_FIRST_BLOCK,
  create(
    payload
  ) {
    const defaultData: ICustomHeader = {
      type: CustomBlocksType.MY_FIRST_BLOCK,
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


export { Panel } from './Panel'