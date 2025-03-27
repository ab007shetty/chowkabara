import React from 'react';
import { Drawer, Typography, Box, IconButton, List, ListItem, ListItemText } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Sidebar = ({ isOpen, onClose, onSelectTab }) => (
  <Drawer
    anchor="left"
    open={isOpen}
    onClose={onClose}
    sx={{
      '& .MuiDrawer-paper': {
        width: 250,
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3))',
        color: '#fff',
        padding: 2,
      },
    }}
  >
    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
      <Typography variant="h6" fontWeight="bold">
        Chowkabara
      </Typography>
      <IconButton onClick={onClose} color="inherit">
        <CloseIcon />
      </IconButton>
    </Box>

    <List>
      <ListItem button onClick={() => onSelectTab('home')}>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button onClick={() => onSelectTab('instructions')}>
        <ListItemText primary="Instructions" />
      </ListItem>
    </List>
  </Drawer>
);

export default Sidebar;
