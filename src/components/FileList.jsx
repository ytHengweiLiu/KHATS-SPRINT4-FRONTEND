import React from 'react';
// import FileBlock from './FileBlock'
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';
import RenderBtn from './RenderBtn';


const FileList = ({ enableCheck, selected, setSelected, token }) => {
  const [toRender, setToRender] = React.useState(false)
  const [files, setFiles] = React.useState([])
  // const getFilesCall = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:3001/khats/getAllFiles', {
  //       headers: {
  //         authorization: token // Set Authorization header with token
  //       }
  //     });
  //     console.log(response);
  //     return response.data.files
  //   } catch (err) {
  //     console.log(err.response && err.response.data.error ? err.response.data.error : 'Failed to login');
  //   }
  // }
  // React.useEffect(() => {
  //   const filesPromise = getFilesCall();
  //   filesPromise.then((files) => {
  //     setFiles(files);
  //     setToRender(true);
  //     console.log(files)
  //   })
  // }, [])

  // React.useEffect(() => {
  //   const getFilesCall = async () => {
  //     // Your asynchronous code to fetch files
  //     try {
  //       const response = await axios.get('http://localhost:3001/khats/getAllFiles', {
  //         headers: {
  //           authorization: token // Set Authorization header with token
  //         }
  //       });
  //       console.log(response);
  //       return response.data.files
  //     } catch (err) {
  //       console.log(err.response && err.response.data.error ? err.response.data.error : 'Failed to login');
  //     }
  //     // const files = await response.json();
  //     // return files;
  //   };
    const getFilesCall = async () => {
      const newToken = token ? token : localStorage.getItem('token')
      try {
        const response = await axios.get('http://localhost:3001/khats/getAllFiles', {
          headers: {
            authorization: newToken // Set Authorization header with token
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

  //   getFilesCall().then((files) => {
  //     setFiles(files);
  //     setToRender(true);
  //     console.log(files);
  //   });
  // }, [token]);
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
      {toRender && files?.map((fileObj) => {
        // return <FileBlock key={fileObj.id} file={fileObj} />
        return <div key={fileObj.id} className='fileBlock'>
          <h3 className='fileBlockName'>{fileObj.file.originalname}</h3>
          {fileObj.isValidated ? <CheckCircleIcon /> : <CancelIcon />}
          <RenderBtn fileId={fileObj.id} />
          {enableCheck && <Checkbox onChange={() => handleOnChange(fileObj.id)} />}
        </div>
      })}
    </div>
  )
}

export default FileList
