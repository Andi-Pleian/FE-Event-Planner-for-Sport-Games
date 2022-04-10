import * as todoActions from "./todo.actions";

export const appProviderActions = (dispatch) => {
  return {
    getAllTodos: () => todoActions.getAllTodos(dispatch),
    addTodo: (body) => todoActions.addTodo(dispatch, body),
    removeTodo: (id) => todoActions.removeTodo(dispatch, id),
  };
};
