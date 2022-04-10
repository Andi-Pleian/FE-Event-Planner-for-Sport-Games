import { appProviderReducer } from "./appReducer";

import { ADD_TODO_SUCCESS, ADD_TODO_ERROR } from "../actions/types";

let initialState = { todos: [], messages: [] };

describe("todoReducer", () => {
  it("should append todo data from payload when type is `ADD_TODO_SUCCESS`", () => {
    const result = appProviderReducer(initialState, {
      type: ADD_TODO_SUCCESS,
      payload: {
        _id: 1,
        message: "test",
      },
    });
    expect(result).toEqual({
      todos: [
        {
          _id: 1,
          message: "test",
        },
      ],
      messages: [],
    });
  });

  it("should add error message from payload when type is `ADD_TODO_ERROR`", () => {
    const result = appProviderReducer(initialState, {
      type: ADD_TODO_ERROR,
      payload: "test",
    });
    expect(result).toEqual({
      todos: [
        {
          _id: 1,
          message: "test",
        },
      ],
      messages: [{ type: "error", message: "test" }],
    });
  });
});
