import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import AddButton, { mainClass } from "./AddButton";

describe("AddButton", () => {
  it("should display the correct button name", () => {
    const { container, debug } = render(
      <AddButton text="test" onClickEvent={() => "test"} />
    );
    debug();
    const addButton = container.getElementsByClassName(mainClass);

    expect(addButton[0]).toBeInTheDocument();
  });
  it("should disable the button if sent prop disabled as true", () => {
    const { getByTestId } = render(
      <AddButton text="test" onClickEvent={() => "test"} disabled={true} />
    );

    const addButton = getByTestId(mainClass);
    expect(addButton).toHaveAttribute("disabled");
  });
});
