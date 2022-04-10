import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import RemoveButton, { mainClass } from "./RemoveButton";

describe("RemoveButton", () => {
  it("should display the correct button name", () => {
    const { container } = render(<RemoveButton onClickEvent={() => "test"} />);
    const removeButton = container.getElementsByClassName(mainClass);

    expect(removeButton[0]).toBeInTheDocument();
  });

  it("should disable the button if sent prop disabled as true", () => {
    const { getByTestId } = render(
      <RemoveButton onClickEvent={() => "test"} disabled={true} />
    );

    const addButton = getByTestId(mainClass);
    expect(addButton).toHaveAttribute("disabled");
  });
});
