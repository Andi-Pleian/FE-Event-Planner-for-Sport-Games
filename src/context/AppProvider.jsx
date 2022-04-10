import React, { createContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import { appProviderReducer } from "../reducers/appReducer";
import { appProviderActions } from "../actions/appProvider";

export const AppProviderContext = createContext(null);

const initialState = {
  messages: [],
  todos: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appProviderReducer, initialState);
  const actions = appProviderActions(dispatch);

  useEffect(() => {
    actions.getAllTodos();
  }, []);

  return (
    <AppProviderContext.Provider
      value={{
        state,
        dispatch,
        actions,
      }}
    >
      {children}
    </AppProviderContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default AppProvider;
