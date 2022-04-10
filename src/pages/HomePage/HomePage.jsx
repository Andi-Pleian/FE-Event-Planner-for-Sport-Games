import React, { useContext } from "react";
import AddTodoForm from "../../components/molecules/AddTodoForm/AddTodoForm";
import Message from "../../components/atoms/Message/Message";
import { AppProviderContext } from "../../context/AppProvider";
import TodoList from "../../components/organisms/TodoList/TodoList";

import "./HomePage.style.css";

export const mainClass = "home-page";

const HomePage = () => {
  const { state, actions } = useContext(AppProviderContext);

  return (
    <div className={mainClass}>
      {state.messages.map((item) => (
        <Message message={item.message} type="error" key={item.message} />
      ))}
      <AddTodoForm />
      <TodoList state={state} actions={actions} />
    </div>
  );
};

export default HomePage;
