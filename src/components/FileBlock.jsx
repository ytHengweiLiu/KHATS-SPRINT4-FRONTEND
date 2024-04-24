import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import RenderBtn from './RenderBtn'

const FileBlock = ({ file }) => {
  return (
    <div className='fileBlock'>
        <h3 className='fileBlockName'>{file.file.originalname}</h3>
        {file.isValidated ? <CheckCircleIcon /> : <CancelIcon />}
        <RenderBtn fileId={file.id} />
    </div>
  )
}

export default FileBlock
