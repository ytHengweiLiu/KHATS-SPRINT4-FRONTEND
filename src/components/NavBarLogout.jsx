import axios from 'axios';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

const NavbarLogout = ({ pageName, token, setToken }) => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await axios.post('http://localhost:3001/khats/auth/logout', {}, {
        headers: {
          authorization: `${token}`
        }
      });
      setToken(null);
    } catch (err) {
      console.log(err);
      // alert(err.response.data.error);
    }
  }

  return (
    <Navbar bg="white" data-bs-theme="light">
      <Container>
        <Navbar.Brand style={{ color: 'green', fontFamily: 'Alice', fontSize: '2em' }}>KHATS</Navbar.Brand>
        <Nav className="me-auto mx-auto">
          <Nav.Link style={{ color: 'black', fontFamily: 'Alice', fontSize: '1.1em' }} >{pageName}</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link onClick={logout}>Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarLogout;
