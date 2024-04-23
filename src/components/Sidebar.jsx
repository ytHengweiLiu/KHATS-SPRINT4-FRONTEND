import React from 'react'
import { useNavigate } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className={`bg-white d-flex justify-content-between flex-column`} style={{ width: '10%', marginLeft: '5%' }} >
        <List>
          {['dashboard', 'creation', 'render', 'send', 'received', 'validate'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} onClick={() => navigate(`/${text}`)}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
    </div>
  )
}

export default Sidebar
