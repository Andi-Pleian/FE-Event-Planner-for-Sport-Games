import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import Message, { mainClass } from "./Message";

const messageTypes = {
  error: "error",
  warning: "warning",
  success: "success",
};

describe("Message", () => {
  it("should display the message", () => {
    const { container } = render(
      <Message message="test" type={messageTypes.success} />
    );
    const message = container.getElementsByClassName(mainClass);

    expect(message[0]).toBeInTheDocument();
  });
  it("should display the error message", () => {
    const { container } = render(
      <Message message="test" type={messageTypes.error} />
    );
    const message = container.getElementsByClassName(messageTypes.error);

    expect(message[0]).toBeInTheDocument();
  });
  it("should display the success message", () => {
    const { container } = render(
      <Message message="test" type={messageTypes.success} />
    );
    const message = container.getElementsByClassName(messageTypes.success);

    expect(message[0]).toBeInTheDocument();
  });
  it("should display the warning message", () => {
    const { container } = render(
      <Message message="test" type={messageTypes.warning} />
    );
    const message = container.getElementsByClassName(messageTypes.warning);

    expect(message[0]).toBeInTheDocument();
  });
});
