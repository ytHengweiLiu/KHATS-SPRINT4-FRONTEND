import 'bootstrap/dist/css/bootstrap.min.css';
import { React, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Creation, Dashboard, Login, Received, Register, Render, Send, Validate } from './pages/Index';

function App() {
  let isToken = null;
  if (localStorage.getItem('token') && localStorage.getItem('token') !== "undefined") {
    isToken = JSON.parse(localStorage.getItem('token'));
  }

  const [token, setToken] = useState(isToken);

  const setTokenAbstract = (token) => {
    setToken(token);
    localStorage.setItem('token', JSON.stringify(token));
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login token={token} setToken={(token) => setTokenAbstract(token)} />} />
        <Route path="/register" element={<Register token={token} setToken={(token) => setTokenAbstract(token)} />} />
        <Route path="/dashboard" element={<Dashboard token={token} setToken={(token) => setTokenAbstract(token)}/>} />
        <Route path="/creation" element={<Creation />} />
        <Route path="/render" element={<Render />} />
        <Route path="/send" element={<Send />} />
        <Route path="/received" element={<Received />} />
        <Route path="/validate" element={<Validate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
