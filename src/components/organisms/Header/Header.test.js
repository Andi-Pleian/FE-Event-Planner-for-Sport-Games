import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import AppProvider, { AppProviderContext } from "../../../context/AppProvider";
import { appProviderActions } from "../../../actions/appProvider";

import Header, { mainClass } from "./Header";

const stateMock = {
  state: {
    todos: [],
    messages: [],
  },
};

global.window = Object.create(window);

describe("Header", () => {
  const dispatch = jest.fn();

  const actions = appProviderActions(dispatch);

  it("should display the component", () => {
    const { container } = render(
      <BrowserRouter>
        <AppProvider>
          <AppProviderContext.Provider
            value={{ ...stateMock, actions: { ...actions } }}
          >
            <Header />
          </AppProviderContext.Provider>
        </AppProvider>
      </BrowserRouter>
    );
    const header = container.getElementsByClassName(mainClass);

    expect(header[0]).toBeInTheDocument();
  });

  it("should take the user to `/` page when clicking on `Todo App`", () => {
    render(
      <BrowserRouter>
        <AppProvider>
          <AppProviderContext.Provider
            value={{ ...stateMock, actions: { ...actions } }}
          >
            <Header />
          </AppProviderContext.Provider>
        </AppProvider>
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText("Todo App"));

    expect(window.location.href).toEqual("http://localhost/");
  });

  it("should take the user to `/author` page when clicking on `Author`", () => {
    render(
      <BrowserRouter>
        <AppProvider>
          <AppProviderContext.Provider
            value={{ ...stateMock, actions: { ...actions } }}
          >
            <Header />
          </AppProviderContext.Provider>
        </AppProvider>
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText("Author"));

    expect(window.location.href).toEqual("http://localhost/author");
  });
});
