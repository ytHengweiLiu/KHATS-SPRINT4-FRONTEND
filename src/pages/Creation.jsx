import React from 'react'
import { CopyrightFooter, NavbarLogout, Sidebar } from '../components/Index'
import InvoiceForm from '../components/InvoiceCreationForm'

const Creation = ({token}) => {
  return (
    <>
      <NavbarLogout pageName={'Creation'} />
      <Sidebar boldText={'creation'} />
      <div>
        <InvoiceForm token={token}/>
      </div>
      <CopyrightFooter />
    </>
  )
}

export default Creation
