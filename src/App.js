import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import RegistrationForm from './Components/RegistrationForm/RegistrationForm';
import Main from './Components/MainPage/Main';
import Choose from './Components/Choose/Choose';
import CreateEvent from './Components/CreateEvent/CreateEvent';
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/RegisterForm" element={<RegistrationForm />} />
          <Route path="/Choose" element={<Choose />} />
          <Route path="/CreateEvent" element={<CreateEvent />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
