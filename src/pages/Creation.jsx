import React from 'react'
import { CopyrightFooter, NavbarLogout, Sidebar } from '../components/Index'
import InvoiceForm from '../components/InvoiceCreationForm'
import RenderBtn from '../components/RenderBtn'

const Creation = ({token}) => {
  return (
    <>
      <NavbarLogout pageName={'Creation'} />
      <div className="grid-container">
        <Sidebar boldText={'creation'} />
        <div className="content-container">
          <div>
            <InvoiceForm token={token}/>
          </div>
        </div>
        <CopyrightFooter />
      </div>
    </>
  )
}

export default Creation
