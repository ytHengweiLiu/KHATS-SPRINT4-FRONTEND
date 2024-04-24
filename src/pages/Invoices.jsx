import Button from '@mui/material/Button';
import React from 'react';
import { CopyrightFooter, FileList, NavbarLogout, SendModal, Sidebar } from '../components/Index';

const Invoices = ({ token }) => {
  const [enableCheck, setEnableCheck] = React.useState(false)
  const [selected, setSelected] = React.useState([])
  return (
    <>
      <NavbarLogout pageName={'Invoices'} />
      <div className="grid-container">
        <Sidebar boldText={'Invoices'} />
        <div className="content-container">
          {!enableCheck && <Button variant="text" onClick={() => setEnableCheck(true)}>Select</Button>}
          {enableCheck && <SendModal fileIds={selected} setEnableCheck={setEnableCheck} />}
          <FileList enableCheck={enableCheck} selected={selected} setSelected={setSelected} token={token}/>
        </div>
        <CopyrightFooter />
      </div>
    </>
  )
}

export default Invoices
