import React from 'react'
import { NavbarLogout, CopyrightFooter, Sidebar } from '../components/Index'

const Received = () => {
  return (
    <>
      <NavbarLogout pageName={'Received'} />
      <Sidebar boldText={'received'} />
      <CopyrightFooter />
    </>
  )
}

export default Received
