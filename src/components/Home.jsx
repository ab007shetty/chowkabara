import React, { useState } from "react";
import { Box, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import GameBoard from './GameBoard'; // Import the GameBoard component

function Home() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [isGameStarted, setIsGameStarted] = useState(false);
  const [gameWinner, setGameWinner] = useState(null);

  // Function to start the game with the bot
  const startGameWithBot = () => {
    setIsGameStarted(true);
    setGameWinner(null); // Reset winner at the start
  };

  // Function to handle when the game ends (either tie or win)
  const handleGameEnd = (winner) => {
    setGameWinner(winner); // Set the winner (X, O, Tie)
    setIsGameStarted(false); // Optionally stop the game after it ends
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        px: { xs: 0, lg: 10 }, // No padding on small screens, padding 10 on large screens and above
      }}
      width="100%"
    >
      {!isGameStarted ? (
        <Box
          display="grid"
          gridTemplateColumns={isSmallScreen ? "1fr" : "repeat(3, 1fr)"} // Stacks columns on small screens
          gap={4}
          width="100%"
          maxWidth="1200px" // Limits the width on larger screens
        >
          {/* Play Online Card */}
          <Paper
            elevation={4}
            sx={{
              p: 4,
              bgcolor: "rgba(33, 150, 243, 0.8)",
              textAlign: "center",
              cursor: "pointer",
              transition: "transform 0.2s",
              ":hover": { transform: "scale(1.05)" },
            }}
          >
            <img
              src="./images/play.svg"
              alt="Play Online"
              style={{ width: "96px", height: "96px", marginBottom: "16px" }}
            />
            <Typography variant="h5" fontWeight="bold" color="white">
              Play Online
            </Typography>
          </Paper>

          {/* Play with Friends Card */}
          <Paper
            elevation={4}
            sx={{
              p: 4,
              bgcolor: "rgba(76, 175, 80, 0.8)",
              textAlign: "center",
              cursor: "pointer",
              transition: "transform 0.2s",
              ":hover": { transform: "scale(1.05)" },
            }}
          >
            <img
              src="./images/friends.svg"
              alt="Play with Friends"
              style={{ width: "96px", height: "96px", marginBottom: "16px" }}
            />
            <Typography variant="h5" fontWeight="bold" color="white">
              Play with Friends
            </Typography>
          </Paper>

          {/* Play with Bot Card */}
          <Paper
            onClick={startGameWithBot}
            elevation={4}
            sx={{
              p: 4,
              bgcolor: "rgba(244, 67, 54, 0.8)",
              textAlign: "center",
              cursor: "pointer",
              transition: "transform 0.2s",
              ":hover": { transform: "scale(1.05)" },
            }}
          >
            <img
              src="./images/bot.svg"
              alt="Play with Bot"
              style={{ width: "96px", height: "96px", marginBottom: "16px" }}
            />
            <Typography variant="h5" fontWeight="bold" color="white">
              Play with Bot
            </Typography>
          </Paper>
        </Box>
      ) : (
        // Show the GameBoard when the game starts
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          sx={{ width: "100%", mt: 4 }}
        >
          <GameBoard handleGameEnd={handleGameEnd} />
          {gameWinner && (
            <Typography variant="h6" color="yellow" mt={2}>
              {gameWinner === "Tie" ? "It's a Tie!" : `${gameWinner} Wins!`}
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
}

export default Home;
