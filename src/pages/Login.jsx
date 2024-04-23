import React from 'react'
import { useNavigate } from 'react-router-dom';
import { NavbarLogin, CopyrightFooter } from '../components/Index'
import Button from 'react-bootstrap/Button';

const Login = () => {
  const navigate = useNavigate()

  const login = async () => {
    navigate('/dashboard')
  }

  return (
    <>
      <NavbarLogin />
      <div className={'d-flex justify-content-center align-items-center'} style={{ paddingTop: '8%'}}>
        <div id="page-login">
          <h1 className="h2 mb-3 fw-normal" style={{ color: 'green', fontFamily: 'Alice' }} >Sign In</h1>
          <div className="form-floating">
              <input type="email" className="form-control" id="login-email" placeholder="Email address" />
              <label htmlFor="login-email">Email address</label>
          </div>
          <div className="form-floating">
              <input type="password" className="form-control" id="login-password" placeholder="Password"/>
              <label htmlFor="login-password">Password</label>
          </div>
          <p></p>
          <Button id="login-user" variant="outline-success" onClick={login} >Login</Button>
        </div>
      </div>
      <CopyrightFooter />
    </>
  )
}

export default Login
