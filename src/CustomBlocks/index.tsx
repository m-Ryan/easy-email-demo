import { BlocksMap, BlockMarketCategory, BlockMaskWrapper } from 'easy-email-editor';
import React from 'react';
import { CustomBlocksType } from './constants';
import { MyFirstBlock } from './MyFirstBlock';

BlocksMap.registerBlocks({ MyFirstBlock: MyFirstBlock });

export const customBlocks: BlockMarketCategory = {
  title: 'Custom',
  name: 'Custom',
  blocks: [
    {
      title: MyFirstBlock.name,
      description: 'An custom block',
      ExampleComponent: () => (
        <BlockMaskWrapper
          type={CustomBlocksType.MY_FIRST_BLOCK as any}
          payload={{

          }}
        >
          <div style={{ position: 'relative' }}>
            <img src={'https://assets.maocanhua.cn/5631c12e-5788-40fd-92fe-23930a5985d7-image.png'} style={{ maxWidth: '100%' }} />
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2 }} />
          </div>
        </BlockMaskWrapper>
      )
    },
  ]
};