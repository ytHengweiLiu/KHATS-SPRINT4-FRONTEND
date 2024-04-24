import React from 'react'
import { NavbarLogout, CopyrightFooter, Sidebar } from '../components/Index'
import RenderBtn from '../components/RenderBtn'

const Creation = () => {
  return (
    <>
      <NavbarLogout pageName={'Creation'} />
      <div className="grid-container">
        <Sidebar boldText={'creation'} />
        <div className="content-container">
          {/* add stuff here */}
          <RenderBtn fileId={'ec423027-605c-40b8-a69c-28f1b4e4e7a6'}/>
        </div>
        <CopyrightFooter />
      </div>
    </>
  )
}

export default Creation
