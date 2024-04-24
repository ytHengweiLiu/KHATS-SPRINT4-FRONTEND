import React from 'react'
// import FileBlock from './FileBlock'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import RenderBtn from './RenderBtn'
import axios from 'axios';
import Checkbox from '@mui/material/Checkbox';


const FileList = ({ enableCheck, selected, setSelected }) => {
  const token = '0b93479c-996f-4aa5-b932-a30c5e8fe41d';

  const [toRender, setToRender] = React.useState(false)
  const [files, setFiles] = React.useState([])
  const getFilesCall = async () => {
    try {
      const response = await axios.get('http://localhost:3001/khats/getAllFiles', {
        headers: {
          authorization: token // Set Authorization header with token
        }
      });
      console.log(response);
      return response.data.files
    } catch (err) {
      console.log(err.response && err.response.data.error ? err.response.data.error : 'Failed to login');
    }
  } 
  React.useEffect(() => {
    const filesPromise = getFilesCall();
    filesPromise.then((files) => {
      setFiles(files);  
      setToRender(true);
      console.log(files)
    })
  }, [])
  const handleOnChange = (fileId) => {
    if (selected.indexOf(fileId) === -1) {
      selected.push(fileId);
    } else {
      selected.splice(selected.indexOf(fileId), 1)
    }
    setSelected(selected);
  }
  return (
    <div className='fileList'>
        {toRender && files.reverse().map((fileObj) => {
          // return <FileBlock key={fileObj.id} file={fileObj} />
          return <div key={fileObj.id} className='fileBlock'>
            <h3 className='fileBlockName'>{fileObj.file.originalname}</h3>
            {fileObj.isValidated ? <CheckCircleIcon /> : <CancelIcon />}
            <RenderBtn fileId={fileObj.id} />
            {enableCheck && <Checkbox  onChange={() => handleOnChange(fileObj.id)}/>}
          </div>
        })}
    </div>
  )
}

export default FileList
