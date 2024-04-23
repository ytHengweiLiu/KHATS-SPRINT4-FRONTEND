import React from 'react'
import { NavbarLogout, CopyrightFooter, Sidebar } from '../components/Index'

const Creation = () => {
  return (
    <>
      <NavbarLogout pageName={'Creation'} />
      <Sidebar boldText={'creation'} />
      <CopyrightFooter />
    </>
  )
}

export default Creation
