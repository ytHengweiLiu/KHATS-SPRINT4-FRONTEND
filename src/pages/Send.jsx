import React from 'react'
import { NavbarLogout, CopyrightFooter, Sidebar } from '../components/Index'

const Send = () => {
  return (
    <>
      <NavbarLogout pageName={'Send'} />
      <Sidebar boldText={'send'} />
      <CopyrightFooter />
    </>
  )
}

export default Send
