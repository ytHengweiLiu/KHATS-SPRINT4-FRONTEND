import React from 'react';
import { NavbarLogout, CopyrightFooter, Sidebar } from '../components/Index';
import '../App.css'; // Import CSS file for styling

const Dashboard = () => {
  return (
    <>
      <NavbarLogout pageName={'Dashboard'} />
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

