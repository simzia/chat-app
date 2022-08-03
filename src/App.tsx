import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Containers/Home';
import LoginPage from './Containers/Login';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import {
  Button,
  Container,
  Typography,
  Stack,
  Box,
  TextField,
  Grid,
} from '@mui/material';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="logIn" element={<LoginPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
