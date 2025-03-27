import React, { useState } from "react";
import Header from './components/Header';  // Import Header component
import Sidebar from './components/Sidebar';  // Import Sidebar component
import Home from './components/Home';  // Import Home component
import { CssBaseline, Box } from "@mui/material";
import GameInstructions from './components/GameInstructions';  // Import GameInstructions component

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Track sidebar visibility
  const [selectedTab, setSelectedTab] = useState('home');  // Track the current view ('home' or 'instructions')

  const handleSidebarToggle = () => setIsSidebarOpen(!isSidebarOpen);

  const handleTabSelection = (tab) => {
    setSelectedTab(tab);
    setIsSidebarOpen(false); // Close sidebar after selecting a tab
  };

  const startQuickMatch = () => {
    // Logic to start quick match
  };

  const joinRoom = () => {
    // Logic to join a room
  };

  const startGameWithBot = () => {
    // Logic to start game with bot
  };

  const renderContent = () => {
    switch (selectedTab) {
      case 'instructions':
        return <GameInstructions />;
      case 'home':
      default:
        return (
          <Home
            startQuickMatch={startQuickMatch}
            joinRoom={joinRoom}
            startGameWithBot={startGameWithBot}
          />
        );
    }
  };

  return (
    <Box
      className="flex h-screen bg-gray-700 text-white"
      sx={{
        backgroundAttachment: 'fixed', // Makes background fixed while scrolling
        position: 'relative' // To ensure content is stacked properly
      }}
    >
      <CssBaseline />
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarToggle} onSelectTab={handleTabSelection} />

      {/* Main content area with padding at the bottom */}
      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        p={2}   // General padding
        pt={8}  // Padding at the top for space from header
        pb={4}  // Padding at the bottom for all pages (you can adjust this)
        sx={{
          backgroundColor: '#2d2d2d',  // Content area background color
          overflowY: 'auto'  // To allow the content to scroll while background is fixed
        }}
      >
        {/* Header */}
        <Header onSidebarToggle={handleSidebarToggle} />
        
        {/* Dynamic content based on selected tab */}
        <Box mt={3} mb={3}>
          {renderContent()}
        </Box>
      </Box>
    </Box>
  );
}

export default App;
