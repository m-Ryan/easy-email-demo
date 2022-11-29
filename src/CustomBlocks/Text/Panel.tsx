import React from "react";
import {
  AttributesPanelWrapper,
  BlockAttributeConfigurationManager,
  ColorPickerField,
  NumberField,
  TextField,
} from "easy-email-extensions";
import { AdvancedType } from "easy-email-core";
import { Stack, useFocusIdx } from "easy-email-editor";

const DefaultPanel = BlockAttributeConfigurationManager.get(AdvancedType.TEXT);

export function Panel() {
  const { focusIdx } = useFocusIdx();

  return (
    <AttributesPanelWrapper>
      <DefaultPanel />
      <Stack vertical>
        <ColorPickerField
          label="Background color"
          name={`${focusIdx}.attributes.background-color`}
          inline
          alignment="center"
        />
      </Stack>
    </AttributesPanelWrapper>
  );
}
