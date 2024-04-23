import React from 'react'
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { NavbarLogin, CopyrightFooter } from '../components/Index'
import Button from 'react-bootstrap/Button';

const Register = () => {
//   const [email, setEmail] = React.useState('')
//   const [password, setPassword] = React.useState('')
//   const [name, setName] = React.useState('')
  const navigate = useNavigate()

  const register = async () => {
    // try {
    //   const response = await axios.post('http://localhost:5005/admin/auth/register', {
    //     email,
    //     password,
    //     name
    //   })
    //   console.log(response.data);
    //   navigate('/dashboard')
    // } catch (err) {
    //   alert(err.response.data.error)
    // }
    navigate('/dashboard')
  }

  return (
    <>
      <NavbarLogin />
      <div className={'d-flex justify-content-center align-items-center'} style={{ paddingTop: '8%' }}>
        <div id="page-register">
          <h1 className="h2 mb-3 fw-normal" style={{ color: 'green', fontFamily: 'Alice' }} >Register</h1>
          <div className="form-floating">
            <input type="text" className="form-control" id="register-name" placeholder="Name" />
            <label htmlFor="register-name">Name</label>
          </div>
          <div className="form-floating">
            <input type="text" className="form-control" id="register-email" placeholder="Email Address" />
            <label htmlFor="register-email">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="register-password" placeholder="Password" />
            <label htmlFor="register-password">Password</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="register-confirm-password" placeholder="Confirm Password" />
            <label htmlFor="register-confirm-password">Confirm password</label>
          </div>
          <p></p>
          <Button id="login-user" variant="outline-success" onClick={register} >Register</Button>
        </div>
      </div>
      <CopyrightFooter />
    </>
  )
}

export default Register
