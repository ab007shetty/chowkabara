import React from 'react';
import { Typography, Box, Paper, Grid } from '@mui/material';
import { SportsScore, Gamepad, CheckCircle, Place } from '@mui/icons-material'; // Icons for sections

const GameInstructions = () => {
  return (
    <Box className="p-0 text-gray-300 rounded-lg shadow-lg max-w-full mx-auto mt-3">
      <Grid container spacing={3}>
        {/* Left-side content (Cards for Instructions) */}
        <Grid item xs={12} md={7} order={{ xs: 2, md: 1 }}>
          <Box display="flex" flexDirection="column" width="100%">
            {/* Left Card: Game Instructions */}
            <Paper elevation={3} sx={{ background: '#2d2d2d', p: 2, mb: 1 }}>
              <Box display="flex" alignItems="center">
                <SportsScore color="primary" sx={{ fontSize: 40, mr: 2 }} />
                <Typography variant="h5" fontWeight="bold" color="white">Objective:</Typography>
              </Box>
              <Typography variant="body1" paragraph color="white">
                The goal of the game is to form a straight line with three of your pieces horizontally, vertically, or diagonally on the game board. The first player to form a "mill" wins.
              </Typography>
            </Paper>

            {/* Left Card: Setup */}
            <Paper elevation={3} sx={{ background: '#2d2d2d', p: 2, mb: 1 }}>
              <Box display="flex" alignItems="center">
                <Place color="primary" sx={{ fontSize: 40, mr: 2 }} />
                <Typography variant="h5" fontWeight="bold" color="white">Setup:</Typography>
              </Box>
              <Typography variant="body1" paragraph color="white">
                The game is played by two players. Each player has three pieces to start. The game board has nine intersection points where the pieces can be placed.
              </Typography>
            </Paper>

            {/* Left Card: Phases of the Game */}
            <Paper elevation={3} sx={{ background: '#2d2d2d', p: 2, mb: 1 }}>
              <Box display="flex" alignItems="center">
                <Gamepad color="primary" sx={{ fontSize: 40, mr: 2 }} />
                <Typography variant="h5" fontWeight="bold" color="white">Phases of the Game:</Typography>
              </Box>

              {/* Placement Phase */}
              <Box mt={1}>
                <Typography variant="h6" fontWeight="bold" color="white">Placement Phase:</Typography>
                <Typography variant="body1" paragraph color="white">
                  Players take turns placing one of their pieces on any unoccupied point on the board. Once all six pieces (three for each player) are on the board, the game moves to the movement phase.
                </Typography>
              </Box>

              {/* Movement Phase */}
              <Box mt={1}>
                <Typography variant="h6" fontWeight="bold" color="white">Movement Phase:</Typography>
                <Typography variant="body1" paragraph color="white">
                  Players take turns moving one of their pieces to an adjacent point. Pieces can only move to an unoccupied adjacent point. If no adjacent points are available (all are occupied), the player loses that turn.
                </Typography>
              </Box>
            </Paper>

            {/* Left Card: Winning Condition */}
            <Paper elevation={3} sx={{ background: '#2d2d2d', p: 2 }}>
              <Box display="flex" alignItems="center">
                <CheckCircle color="primary" sx={{ fontSize: 40, mr: 2 }} />
                <Typography variant="h5" fontWeight="bold" color="white">Winning Condition:</Typography>
              </Box>
              <Typography variant="body1" paragraph color="white">
                The first player to form a straight line with their three pieces, horizontally, vertically, or diagonally, wins the game. Lines can be formed with or without the center point.
              </Typography>
            </Paper>
          </Box>
        </Grid>

        {/* Right-side content (Game Board Image and Description) */}
        <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }}>
          <Box display="flex" flexDirection="column">
            {/* Right Card: Game Board Image */}
            <Paper elevation={3} sx={{ background: '#2d2d2d', p: 2 }}>
              <img
                src="https://via.placeholder.com/600x400?text=Game+Board+Example"
                alt="Game Board Example"
                style={{ width: '100%', borderRadius: '8px' }}
              />
              <Typography variant="caption" color="textSecondary" mt={1}>
                Example of the game board
              </Typography>
            </Paper>

            {/* Right Card: Visualizing the Game Board */}
            <Paper elevation={3} sx={{ background: '#2d2d2d', p: 2, mt: 2 }}>
              <Typography variant="h5" fontWeight="bold" color="white" gutterBottom>
                Visualizing the Game Board
              </Typography>
              <Typography variant="body1" color="white">
                The board consists of nine intersection points where players can place their pieces. The strategy is to form a "mill" by placing three pieces in a row, either horizontally, vertically, or diagonally.
              </Typography>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GameInstructions;
