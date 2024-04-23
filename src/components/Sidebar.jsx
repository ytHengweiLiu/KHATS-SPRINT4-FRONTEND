import React from 'react';
import { useNavigate } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const Sidebar = ({ boldText }) => {
  const navigate = useNavigate();

  const handleClick = (text) => {
    console.log(`Clicked on ${text}`);
    navigate(`/${text}`);
  };

  return (
    <div className={`bg-white d-flex justify-content-between flex-column`} style={{ width: '10%'}}>
      <List>
        {['dashboard', 'creation', 'render', 'send', 'received', 'validate'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => handleClick(text)} >
              <ListItemText
                primary={<span style={{ textAlign: 'center', fontWeight: boldText === text ? 'bold' : 'normal' }} >{text}</span>}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
