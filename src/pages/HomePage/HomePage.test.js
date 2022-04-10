import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import HomePage, { mainClass } from "./HomePage";

import { appProviderActions } from "../../actions/appProvider";
import AppProvider, { AppProviderContext } from "../../context/AppProvider";

const stateMock = {
  state: {
    todos: [
      {
        _id: "1",
        message: "fist message",
      },
      {
        _id: "2",
        message: "second message",
      },
    ],
    messages: [],
  },
};

describe("HomePage", () => {
  const dispatch = jest.fn();

  const actions = appProviderActions(dispatch);

  it("should display the component", () => {
    const { container } = render(
      <AppProvider>
        <AppProviderContext.Provider
          value={{ ...stateMock, actions: { ...actions } }}
        >
          <HomePage />
        </AppProviderContext.Provider>
      </AppProvider>
    );
    const homePage = container.getElementsByClassName(mainClass);

    expect(homePage[0]).toBeInTheDocument();
  });
});
