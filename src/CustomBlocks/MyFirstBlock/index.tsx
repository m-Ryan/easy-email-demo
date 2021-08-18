import { Panel } from './Panel';
import { createInstance } from './createInstance';
import { IBlock, IBlockData, BasicType, BlocksMap, MjmlToJson } from 'easy-email-editor';
import { CustomBlocksType } from '../constants';

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

const transform = (data: ICustomHeader) => {
  const { imageUrl, buttonText } = data.data.value;
  const attributes = data.attributes;

  const instance = MjmlToJson(`
    <mj-section padding="20px">
      <mj-column>
        <mj-image padding="0px 0px 0px 0px" width="100px" src="${imageUrl}">
        </mj-image>
        <mj-button background-color="${attributes['background-color']}" color="${attributes['text-color']}" href="#">
          ${buttonText}
        </mj-button>
      </mj-column>
    </mj-section>
  `)

  // const { Section, Column, Image, Button } = BlocksMap.basicBlocksMap

  // const instance = Section.createInstance({
  //   attributes: {
  //     padding: '20px'
  //   },
  //   children: [
  //     Column.createInstance({
  //       children: [
  //         Image.createInstance({
  //           attributes: {
  //             padding: '0px',
  //             width: '100px',
  //             src: imageUrl
  //           }
  //         }),
  //         Button.createInstance({
  //           attributes: {
  //             "background-color": attributes['background-color'],
  //             color: attributes['text-color']
  //           },
  //           data: {
  //             value: {
  //               content: buttonText
  //             }
  //           }
  //         })
  //       ]
  //     })
  //   ]
  // })


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
