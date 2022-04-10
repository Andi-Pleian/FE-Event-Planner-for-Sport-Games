import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import TextField, { mainClass } from "./TextField";

describe("TextField", () => {
  it("should render the text-field", () => {
    const { container } = render(
      <TextField onChange={() => "test"} value="test" />
    );
    const textField = container.getElementsByClassName(mainClass);

    expect(textField[0]).toBeInTheDocument();
  });
});
