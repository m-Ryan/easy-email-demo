import { BlockGroup, BlocksMap } from 'easy-email-editor';
import { MyFirstBlock } from './MyFirstBlock';
import { MySecondBlock } from './MySecondBlock';

BlocksMap.registerBlocks({ MyFirstBlock, MySecondBlock });

export const customBlocks: BlockGroup = {
  title: 'Custom blocks',
  blocks: [
    {
      label: MyFirstBlock.name,
      data: MyFirstBlock.createInstance(),
      thumbnail:
        'https://assets.maocanhua.cn/6b783170-dd20-48e9-8d82-67069178bdb7-image.png',
    },
    {
      label: MySecondBlock.name,
      data: MySecondBlock.createInstance(),
      // thumbnail:
      //   'https://assets.maocanhua.cn/6b783170-dd20-48e9-8d82-67069178bdb7-image.png',
    },
  ],
};
