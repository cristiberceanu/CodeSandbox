import { Stack, Modal, TextField, Scrollable, Icon } from "@shopify/polaris";
import React from "react";
import { ArrowRightMinor } from "@shopify/polaris-icons";

function StackExample() {
  return (
    <Modal
      open={true}
      onClose={() => {
        // editAltText({ id: "" });
      }}
      // title="Update alt text"
      primaryAction={{
        content: "Update",
        onAction: () => {
          // editAltText({ id: "" });
        }
      }}
      secondaryActions={[
        {
          content: "Cancel",
          onAction: () => {
            // editAltText({ id: "" });
          }
        }
      ]}
    >
      <Modal.Section>
        <Stack spacing={"tight"} alignment={"center"} distribution={"center"}>
          <span>Previous alt tag</span>
          <Icon source={ArrowRightMinor} color="base" />
          <TextField label="" value={`new text`}></TextField>{" "}
        </Stack>
        <div style={{ marginTop: ".5rem" }}>
          <Stack spacing={"tight"} alignment={"center"} distribution={"center"}>
            <span>Previous alt tag</span>
            <Icon source={ArrowRightMinor} color="base" />
            <TextField label="" value={`new text`}></TextField>
          </Stack>
        </div>
      </Modal.Section>
    </Modal>
  );
}

export default StackExample;
