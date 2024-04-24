import { Button, Paper, TextField } from '@mui/material';
import axios from 'axios';
import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CopyrightFooter, NavbarLogin } from '../components/Index';

function Login ({ token, setToken }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  useEffect(() => {
    if (token) {
      navigate('/dashboard');
    }
  }, [token, navigate]);

  const login = async () => {
    try {
      const response = await axios.post('http://localhost:3001/khats/auth/login', {
        email,
        password
      });
      if (response.data.status === '400') {
        alert(response.data.error);
      } else {
        console.log(response.data)
        setToken(response.data.token);
      }
    } catch (err) {
      alert(err.response.data.error);
    }
  }

  return (
    <>
      <NavbarLogin />
      <div className={'d-flex justify-content-center align-items-center'} style={{ paddingTop: '8%' }}>
        <Paper sx={{ padding: '2%', width: '50%', height: '350px' }} align='center' id="page-login">
          <h1 className="h2 mb-3 fw-normal" style={{ color: 'green', fontFamily: 'Alice' }} >Sign In</h1>
          <TextField
            margin='normal'
            type="email"
            label="Email"
            placeholder="Email address"
            fullWidth
            onChange={e => setEmail(e.target.value)}
            required />
          <TextField
            margin='normal'
            type="password"
            label="Password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
            fullWidth
            required />
          <br />
          <br />
          <Button id="login-user" variant="contained" onClick={login} >Login</Button>
        </Paper>
      </div>
      <CopyrightFooter />
    </>
  )
}

export default Login
