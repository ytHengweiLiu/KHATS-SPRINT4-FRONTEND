import React from 'react'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import axios from 'axios';

// const testingfileId = "c577417e-66a1-41eb-b79b-02832183c4a5";
const RenderBtn = ({ fileId }) => {
  const token = '3200931d-3953-4975-94c4-6093aa5f7775';

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
    <div style={{ padding: '10px' }}>
      <ReceiptOutlinedIcon onClick={() => { renderFileCall() }}/>
    </div>
  )
}

export default RenderBtn
