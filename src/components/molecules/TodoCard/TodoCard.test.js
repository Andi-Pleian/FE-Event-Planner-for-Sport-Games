import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import AppProvider, { AppProviderContext } from "../../../context/AppProvider";
import { appProviderActions } from "../../../actions/appProvider";

import TodoCard, { mainClass } from "./TodoCard";

const stateMock = {
  state: {
    todos: [],
    messages: [],
  },
};

describe("TodoCard", () => {
  const dispatch = jest.fn();

  const actions = appProviderActions(dispatch);

  it("should display the component", () => {
    const { container } = render(
      <AppProvider>
        <AppProviderContext.Provider
          value={{ ...stateMock, actions: { ...actions } }}
        >
          <TodoCard id="1" message="test" removeTodo={() => {}} />
        </AppProviderContext.Provider>
      </AppProvider>
    );
    const todoCard = container.getElementsByClassName(mainClass);

    expect(todoCard[0]).toBeInTheDocument();
  });
});
