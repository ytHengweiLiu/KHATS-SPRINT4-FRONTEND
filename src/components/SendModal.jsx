import React from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function SendModal ({ fileIds, setEnableCheck, }) {
  // const token = '0b93479c-996f-4aa5-b932-a30c5e8fe41d';
  const token = localStorage.getItem('token');
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [canSend, setCanSend] = React.useState(false);
  const setModalOpen = () => {
    setOpen(true)
  };
  const close = () => {
    setOpen(false);
    setEnableCheck(false);
  }
  const handleSetEmail = (newEmail) => {
    setCanSend(validateEmail(email))
    setEmail(newEmail)
  }
  const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
  };
  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3001/khats/sendMultiple', 
      { recipient: email, fileIds },
      {
        headers: {
          authorization: token 
        }
      });
      console.log(response);
      setEnableCheck(false);
    } catch (err) {
      console.log('couldnt send the email')
      setEnableCheck(false);
    }
  }
  return (

    <div>
      <Button variant="text" onClick={setModalOpen}>Send</Button>
      <Modal
        open={open}
      >
        <Box className='modalStyle'>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Recipient
          </Typography>
          <hr color="#000"/>
          <TextField fullWidth id="presentation-name" label="Recipient email" variant="outlined" onChange={ (e) => handleSetEmail(e.target.value)} value={email}/>
          <br/>
          <Button style={{ marginTop: '10px' }}fullWidth disabled={!canSend} variant="contained" onClick={handleSubmit}>Send</Button>
          <Button style={{ marginTop: '10px' }}fullWidth variant="contained" onClick={close}>Cancel</Button>
        </Box>
      </Modal>
    </div>
  );
}
