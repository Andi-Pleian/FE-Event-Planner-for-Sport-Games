import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import { appProviderActions } from "../../../actions/appProvider";

import TodoList, { mainClass } from "./TodoList";

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

describe("TodoList", () => {
  const dispatch = jest.fn();

  const actions = appProviderActions(dispatch);

  it("should display the component", () => {
    const { container } = render(
      <TodoList state={stateMock.state} actions={actions} />
    );
    const todoCard = container.getElementsByClassName(mainClass);

    expect(todoCard[0]).toBeInTheDocument();
  });

  it("should have 2 todo-cards displayed on the page", () => {
    const { container, debug } = render(
      <TodoList state={stateMock.state} actions={actions} />
    );
    debug();
    const todoCards = container.getElementsByClassName("todo-card");

    expect(todoCards[0]).toBeInTheDocument();
    expect(todoCards[1]).toBeInTheDocument();
  });
});
