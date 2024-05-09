import * as React from "react";
import { createComponent } from "@toolpad/studio/browser";

export interface ControllerComponentProps {
  msg: string;
  children: React.ReactElement;
}

function ControllerComponent({ msg, children }: ControllerComponentProps) {
  return <div>{children}</div>;
}

export default createComponent(ControllerComponent, {
  argTypes: {
    msg: {
      type: "string",
      default: "Hello world!",
    },
  },
});
