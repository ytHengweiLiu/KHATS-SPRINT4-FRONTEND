import React from 'react'
import { CopyrightFooter, NavbarLogout, Sidebar } from '../components/Index'

const Dashboard = () => {
  return (
    <>
      <NavbarLogout pageName={'Dashboard'} />
      <Sidebar boldText={'dashboard'} />
      <div >
        Dashboard
      </div>
      <CopyrightFooter />
    </>
  )
}

export default Dashboard
