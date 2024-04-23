
import React from 'react';
import { NavbarLogout, CopyrightFooter, Sidebar } from '../components/Index';
import '../App.css'; // Import CSS file for styling

const Dashboard = ({token, setToken}) => {
  return (
    <>
      <NavbarLogout pageName={'Dashboard'} token={token} setToken={setToken}/>
      <div className="grid-container">
        <Sidebar boldText={'dashboard'} />
        <div className="content-container">
          Dashboard
        </div>
        <CopyrightFooter />
      </div>
    </>
  );
}

export default Dashboard;

