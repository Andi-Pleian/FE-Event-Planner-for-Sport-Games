import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AppProvider from "./context/AppProvider";
import HomePage from "./pages/HomePage/HomePage";
import Author from "./pages/Author/Author";
import Header from "./components/organisms/Header/Header";

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/author" element={<Author />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
