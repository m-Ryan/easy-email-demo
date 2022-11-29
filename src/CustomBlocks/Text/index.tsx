import React from "react";

import {
  IBlockData,
  IText,
  BlockManager,
  AdvancedType,
  createBlock,
  BasicType,
  getPreviewClassName,
  components,
  getParentByIdx,
} from "easy-email-core";
import { merge } from "lodash";

const { Wrapper, Text, Column, Section } = components;

type ICustomText = IBlockData<
  IText["attributes"] & {
    "background-color"?: string;
  },
  {
    content: string;
  }
>;

const defaultBlock = BlockManager.getBlockByType(AdvancedType.TEXT)!;

export const CustomText = createBlock<ICustomText>({
  name: defaultBlock.name,
  type: defaultBlock.type,
  validParentType: defaultBlock.validParentType,
  create: (payload) => {
    const defaultData: ICustomText = {
      ...defaultBlock,
      data: {
        value: {
          content: payload?.data?.value?.content ?? "You might also like",
        },
      },
      attributes: {
        "font-size": "24px",
      },
      children: [],
    };
    return merge(defaultData, payload);
  },
  render: (params) => {
    const { data, idx, mode, dataSource, context, children } = params;
    const attributes = data.attributes;

    const parentBlockData = getParentByIdx({ content: context! }, idx!);

    if (parentBlockData) {
      if (parentBlockData.type === BasicType.PAGE) {
        return (
          <Wrapper
            background-color={attributes["container-background-color"]}
            css-class={
              mode === "testing"
                ? getPreviewClassName(idx ?? null, data.type)
                : ""
            }
          >
            <Section padding="0px" text-align="left">
              <Column>
                <Text {...attributes}>{data.data.value.content}</Text>
              </Column>
            </Section>
          </Wrapper>
        );
      } else if (
        parentBlockData.type === BasicType.WRAPPER ||
        parentBlockData.type === AdvancedType.WRAPPER
      ) {
        return (
          <Section
            background-color={attributes["container-background-color"]}
            text-align="left"
            css-class={
              mode === "testing"
                ? getPreviewClassName(idx ?? null, data.type)
                : ""
            }
          >
            <Column>
              <Text {...attributes}>{data.data.value.content}</Text>
            </Column>
          </Section>
        );
      }
    }

    return (
      <Text
        {...attributes}
        css-class={
          mode === "testing" ? getPreviewClassName(idx ?? null, data.type) : ""
        }
      >
        {data.data.value.content}
      </Text>
    );
  },
});

export { Panel } from "./Panel";
