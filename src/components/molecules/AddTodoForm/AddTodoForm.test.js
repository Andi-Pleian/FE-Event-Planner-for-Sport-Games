import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import AppProvider, { AppProviderContext } from "../../../context/AppProvider";
import { appProviderActions } from "../../../actions/appProvider";

import AddTodoForm, { mainClass } from "./AddTodoForm";

const stateMock = {
  state: {
    todos: [],
    messages: [],
  },
};

describe("AddTodoForm", () => {
  const dispatch = jest.fn();

  const actions = appProviderActions(dispatch);

  it("should display the component", () => {
    const { container } = render(
      <AppProvider>
        <AppProviderContext.Provider
          value={{ ...stateMock, actions: { ...actions } }}
        >
          <AddTodoForm />
        </AppProviderContext.Provider>
      </AppProvider>
    );
    const todoForm = container.getElementsByClassName(mainClass);

    expect(todoForm[0]).toBeInTheDocument();
  });
});
