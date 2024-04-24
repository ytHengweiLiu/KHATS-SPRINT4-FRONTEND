import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Login, Register, Dashboard, Creation, Render, Send, Received, Validate, Invoices } from './pages/Index';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/creation" element={<Creation />} />
        <Route path="/render" element={<Render />} />
        <Route path="/send" element={<Send />} />
        <Route path="/received" element={<Received />} />
        <Route path="/validate" element={<Validate />} />
        <Route path="/invoices" element={<Invoices />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
