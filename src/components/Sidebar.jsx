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
    <div className={`bg-white d-flex justify-content-between flex-column`} style={{ width: '100%'}}>
      <List>
        {['dashboard', 'creation', 'render', 'send', 'received', 'validate', 'invoices'].map((text, index) => (
          <ListItem key={text} disablePadding style={{ height: '90px' }}>
            <ListItemButton onClick={() => handleClick(text)} style={{ height: '100%' }} >
              <ListItemText
                primary={<span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', fontSize: '1.6em', fontWeight: boldText === text ? 'bold' : 'normal' }} >{text}</span>}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
