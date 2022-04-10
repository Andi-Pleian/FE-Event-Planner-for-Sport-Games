import React, { useState, useContext } from "react";
import { AppProviderContext } from "../../../context/AppProvider";

import AddButton from "../../atoms/AddButton/AddButton";
import TextField from "../../atoms/TextField/TextField";

import { ADD_TODO_FORM } from "../../../utils/constants";
import "./AddTodoForm.style.css";

export const mainClass = "add-todo-form";

const AddTodoForm = () => {
  const { actions } = useContext(AppProviderContext);
  const [inputText, setInputText] = useState("");

  const submitHandler = () => {
    actions.addTodo({ message: inputText });
    setInputText("");
  };

  return (
    <div className={mainClass}>
      <div className={`${mainClass}-row`}>
        <TextField
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
        />
      </div>
      <div className={`${mainClass}-row`}>
        <AddButton
          text={ADD_TODO_FORM.SUBMIT_TEXT}
          onClickEvent={submitHandler}
          disabled={inputText === ""}
        />
      </div>
    </div>
  );
};

export default AddTodoForm;
