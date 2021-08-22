import { CreateInstance } from 'easy-email-editor';
import { merge } from 'lodash';
import { IMySecondBlock } from '.';
import { CustomBlocksType } from '../constants';

export const createInstance: CreateInstance<IMySecondBlock> = (
  payload
) => {
  const defaultData: IMySecondBlock = {
    type: CustomBlocksType.MY_SECOND_BLOCK as any,
    data: {
      value: {
        buttonText: 'Got it',
        imageUrl: 'https://assets.maocanhua.cn/3abfb298-c69d-4f1f-bc25-35aec721b6be-image.png'
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
