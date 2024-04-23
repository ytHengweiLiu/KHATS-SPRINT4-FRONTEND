import React from 'react'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import axios from 'axios';

// const testingfileId = "c577417e-66a1-41eb-b79b-02832183c4a5";
const RenderBtn = ({ fileId }) => {
  const token = 'b7a5f639-de29-4031-8a5b-be7a21341e95';
  const renderFileCall = async () => {
    try {
      const response = await axios.post('http://localhost:3001/khats/renderInvoice',
        { fileId },
        {
          headers: {
            authorization: token // Set Authorization header with token
          }
        }
      );
      const url = response.data.url;
      window.open(url, '_blank');
      
    } catch (err) {
      console.log(err.response && err.response.data.error ? err.response.data.error : 'Failed to login');
    }
  } 
  
  return (
    <>
      <ReceiptOutlinedIcon onClick={() => { renderFileCall() }}/>
    </>
  )
}

export default RenderBtn
