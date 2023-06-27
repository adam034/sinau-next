"use client";

import { Button, ButtonGroup } from "@chakra-ui/react";

export default function CustomButton({ ...props }) {
  return (
    <div>
      <Button isLoading={props.loading} onClick={props.submit}>
        {props.button_name}
      </Button>
    </div>
  );
}
