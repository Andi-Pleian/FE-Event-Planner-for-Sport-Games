import React from "react";
import PropTypes from "prop-types";
import RemoveButton from "../../atoms/RemoveButton/RemoveButton";

import "./TodoCard.style.css";

export const mainClass = "todo-card";

const TodoCard = ({ id, message, removeTodo }) => {
  const handleRemove = () => removeTodo(id);

  return (
    <div className={mainClass}>
      <div className={`${mainClass}-text`}>{message}</div>
      <RemoveButton onClickEvent={handleRemove} />
    </div>
  );
};

TodoCard.propTypes = {
  id: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default TodoCard;
