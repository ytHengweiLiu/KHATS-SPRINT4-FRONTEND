import React from 'react'
import { NavbarLogout, CopyrightFooter, Sidebar } from '../components/Index'

const Render = () => {
  return (
    <>
      <NavbarLogout pageName={'Render'} />
      <Sidebar />
      <CopyrightFooter />
    </>
  )
}

export default Render
