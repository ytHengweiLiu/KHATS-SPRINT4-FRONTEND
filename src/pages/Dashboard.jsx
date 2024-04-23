import React from 'react'
import { NavbarLogout, CopyrightFooter, Sidebar } from '../components/Index'

const Dashboard = () => {
  return (
    <>
      <NavbarLogout pageName={'Dashboard'} />
      <Sidebar boldText={'dashboard'} />
      <CopyrightFooter />
    </>
  )
}

export default Dashboard
