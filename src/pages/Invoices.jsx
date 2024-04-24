import React from 'react'
import { NavbarLogout, CopyrightFooter, Sidebar, FileList, SendModal } from '../components/Index'
import Button from '@mui/material/Button';

const Invoices = () => {
  const [enableCheck, setEnableCheck] = React.useState(false)
  const [selected, setSelected] = React.useState([])
  return (
    <>
      <NavbarLogout pageName={'Invoices'} />
      <div className="grid-container">
        <Sidebar boldText={'Invoices'} />
        <div className="content-container">
          {!enableCheck && <Button variant="text" onClick={() => setEnableCheck(true)}>Select</Button>}
          {enableCheck && <SendModal fileIds={selected} setEnableCheck={setEnableCheck}/>}
          <FileList enableCheck={enableCheck} selected={selected} setSelected={setSelected} />
        </div>
        <CopyrightFooter />
      </div>
    </>
  )
}

export default Invoices
