import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Containers/Home';
import LoginPage from './Containers/Login';
import ChatList from './Containers/ChatList';
import ChatScreen from './Containers/ChatScreen';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="logIn" element={<LoginPage />} />
          <Route path="chatList" element={<ChatList />} />
          <Route path='chatList/:id' element={<ChatScreen/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
