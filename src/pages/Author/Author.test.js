import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import Author, { mainClass } from "./Author";

describe("Author", () => {
  it("should display the component", () => {
    const { container } = render(<Author />);
    const authorPage = container.getElementsByClassName(mainClass);

    expect(authorPage[0]).toBeInTheDocument();
  });
});
