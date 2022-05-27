import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from './Components/MainPage/Main';
import CreateEvent from './Components/CreateEvent/CreateEvent';
import SeeEvents from './Components/SeeEvents/SeeEvents'; 
import LoginForm from './Components/LoginForm/LoginForm';
import RegistrationForm from './Components/RegistrationForm/RegistrationForm';
function App() {
  return (

    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/CreateEvent" element={<CreateEvent />} />
          <Route path="/SeeEvents" element={<SeeEvents />} />
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="/RegisterForm" element={<RegistrationForm />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
