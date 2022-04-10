import {
  ADD_TODO_SUCCESS,
  ADD_TODO_ERROR,
  GET_ALL_TODOS_ERROR,
  GET_ALL_TODOS_SUCCESS,
  APPLICATION_ERROR,
  REMOVE_TODO_SUCCESS,
  REMOVE_TODO_ERROR,
} from "../actions/types";
import { APPLICATION_JSON, BACKEND_URL } from "../utils/constants";

const commonHeaders = {
  "Content-Type": APPLICATION_JSON,
  Accept: APPLICATION_JSON,
};

export const addTodo = async (dispatch, body) => {
  try {
    const response = await fetch(`${BACKEND_URL}/todo/`, {
      method: "POST",
      headers: commonHeaders,
      body: JSON.stringify(body),
    });

    const data = await response.json();
    if (!response.ok) {
      return dispatch({
        type: ADD_TODO_ERROR,
        payload: data,
      });
    }

    dispatch({ type: ADD_TODO_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: APPLICATION_ERROR, payload: error });
  }
};

export const getAllTodos = async (dispatch) => {
  try {
    const response = await fetch(`${BACKEND_URL}/todo/`, {
      method: "GET",
      headers: commonHeaders,
    });

    const data = await response.json();
    if (!response.ok) {
      return dispatch({
        type: GET_ALL_TODOS_ERROR,
        payload: data,
      });
    }

    return dispatch({ type: GET_ALL_TODOS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: APPLICATION_ERROR, payload: error });
  }
};

export const removeTodo = async (dispatch, id) => {
  try {
    const response = await fetch(`${BACKEND_URL}/todo/${id}`, {
      method: "DELETE",
      headers: commonHeaders,
    });

    if (!response.ok) {
      return dispatch({
        type: REMOVE_TODO_ERROR,
        payload: data,
      });
    }

    dispatch({ type: REMOVE_TODO_SUCCESS, payload: id });
  } catch (error) {
    dispatch({ type: APPLICATION_ERROR, payload: error });
  }
};
