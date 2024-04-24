import 'bootstrap/dist/css/bootstrap.min.css';
import { React, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Creation, Dashboard, Invoices, Login, Received, Register, Render, Send, Validate } from './pages/Index';
function App () {
  let isToken = null;
  if (localStorage.getItem('token') && localStorage.getItem('token') !== "undefined") {
    isToken = JSON.parse(localStorage.getItem('token'));
  }

  const [token, setToken] = useState(isToken);

  const setTokenAbstract = (token) => {
    setToken(token);
    console.log(token);
    localStorage.setItem('token', JSON.stringify(token));
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login token={token} setToken={(token) => setTokenAbstract(token)} />} />
        <Route path="/register" element={<Register token={token} setToken={(token) => setTokenAbstract(token)} />} />
        <Route path="/dashboard" element={<Dashboard token={token} setToken={(token) => setTokenAbstract(token)} />} />
        <Route path="/creation" element={<Creation token={token} />} />
        <Route path="/render" element={<Render token={token} />} />
        <Route path="/send" element={<Send token={token} />} />
        <Route path="/received" element={<Received token={token} />} />
        <Route path="/validate" element={<Validate token={token} />} />
        <Route path="/invoices" element={<Invoices token={token} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
