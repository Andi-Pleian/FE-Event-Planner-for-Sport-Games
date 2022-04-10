import { updateObject, pushMessage } from "../utils/utils";
import * as actionTypes from "../actions/types";

export const appProviderReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.APPLICATION_ERROR:
      pushMessage(state, payload.message, "error");
      return { ...state };
    case actionTypes.ADD_TODO_SUCCESS:
      state.todos.push(payload);
      return updateObject(state);
    case actionTypes.GET_ALL_TODOS_SUCCESS:
      return updateObject(state, { todos: payload });
    case actionTypes.REMOVE_TODO_SUCCESS:
      const todos = state.todos.filter((item) => item._id !== payload);
      return { ...state, todos };
    case actionTypes.ADD_TODO_ERROR:
    case actionTypes.GET_ALL_TODOS_ERROR:
    case actionTypes.REMOVE_TODO_ERROR:
      pushMessage(state, payload, "error");
      return { ...state };
    // const messages = state.messages;
    // messages.push(payload);
    // return state;
    default:
      return state;
  }
};
