import React from 'react'
import { CopyrightFooter, NavbarLogout, Sidebar } from '../components/Index'

const Dashboard = ({token, setToken}) => {
  return (
    <>
      <NavbarLogout pageName={'Dashboard'} token={token} setToken={setToken}/>
      <Sidebar boldText={'dashboard'} />
      <div >
        Dashboard
      </div>
      <CopyrightFooter />
    </>
  )
}

export default Dashboard
