import { CreateInstance } from 'easy-email-editor';
import { merge } from 'lodash';
import { ICustomHeader } from '.';
import { CustomBlocksType } from '../constants';

export const createInstance: CreateInstance<ICustomHeader> = (
  payload
) => {
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
};
