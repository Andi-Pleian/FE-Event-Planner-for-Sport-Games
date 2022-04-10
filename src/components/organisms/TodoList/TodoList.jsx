import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TodoCard from "../../molecules/TodoCard/TodoCard";

import "./TodoList.style.css";

export const mainClass = "todo-list";

const TodoList = ({ state, actions }) => {
  const [todosList, setTodosList] = useState(null);

  const handleTodoRemove = (id) => actions.removeTodo(id);

  useEffect(() => {
    setTodosList(
      state.todos
        .map((item) => {
          return (
            <TodoCard
              message={item.message}
              key={item._id}
              id={item._id}
              removeTodo={handleTodoRemove}
            />
          );
        })
        .reverse()
    );
  }, [state.todos]);

  return <div className={mainClass}>{todosList}</div>;
};

TodoList.propTypes = {
  state: PropTypes.shape({
    todos: PropTypes.array.isRequired,
  }),
  actions: PropTypes.shape({
    removeTodo: PropTypes.func.isRequired,
  }),
};

export default TodoList;
