import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup, signOut, auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import AccountSettingsModal from './AccountSettingsModal';
import { AppBar, Toolbar, Typography, IconButton, Avatar, Button, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({ onSidebarToggle }) => {
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const modalRef = useRef(null);

  // Check authentication state
  onAuthStateChanged(auth, (currentUser) => setUser(currentUser));

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      navigate('/home');
    } catch (error) {
      console.error('Error during Google sign-in:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      navigate('/');
    } catch (error) {
      console.error('Error during sign-out:', error);
    }
  };

  return (
    <AppBar position="fixed" sx={{ background: 'linear-gradient(to right, #4c4177, #2a5470)', color: '#fff', zIndex: 1200 }}>
      <Toolbar sx={{ paddingX: 3 }}> {/* Add padding to the sides */}
        <IconButton edge="start" color="inherit" onClick={onSidebarToggle} sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Chowkabara
        </Typography>

        {!user ? (
          <Button color="inherit" onClick={handleGoogleSignIn}>
            Sign in with Google
          </Button>
        ) : (
          <Box display="flex" alignItems="center">
            <Avatar src={user.photoURL} alt={user.displayName} onClick={() => setShowModal(!showModal)} />
            {showModal && (
              <AccountSettingsModal 
                showModal={showModal} 
                onClose={() => setShowModal(false)} 
                handleSignOut={handleSignOut} 
                user={user} 
                modalRef={modalRef} 
              />
            )}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
