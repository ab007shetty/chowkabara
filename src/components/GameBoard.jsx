import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

const GameBoard = ({ handleGameEnd }) => {
  // Define board with custom playable spots matching the shared board image
  const initialBoard = Array(9).fill(null);
  const [board, setBoard] = useState(initialBoard);
  const [isXTurn, setIsXTurn] = useState(true);
  const [placementPhase, setPlacementPhase] = useState(true); // Track placement phase
  const [pieces, setPieces] = useState({ X: 3, O: 3 });
  const [selectedPiece, setSelectedPiece] = useState(null); // Track selected piece during move phase

  // Define valid playable spots and adjacency map based on the shared board image
  const playablePositions = [
    { index: 0, adjacent: [1, 3] },   // Top-left corner
    { index: 1, adjacent: [0, 2, 4] }, // Top-center
    { index: 2, adjacent: [1, 5] },   // Top-right corner
    { index: 3, adjacent: [0, 4, 6] }, // Middle-left
    { index: 4, adjacent: [1, 3, 5, 7] }, // Center
    { index: 5, adjacent: [2, 4, 8] }, // Middle-right
    { index: 6, adjacent: [3, 7] },   // Bottom-left corner
    { index: 7, adjacent: [4, 6, 8] }, // Bottom-center
    { index: 8, adjacent: [5, 7] },   // Bottom-right corner
  ];

  // Define winning combinations based on board intersections
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  // Check for win condition
  const checkForWin = (newBoard) => {
    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        return newBoard[a];
      }
    }
    return null;
  };

  // Handle placement phase clicks
  const handlePlacementClick = (index) => {
    if (board[index] || pieces.X === 0 && pieces.O === 0) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? 'X' : 'O';

    setBoard(newBoard);
    setPieces((prevPieces) => ({
      ...prevPieces,
      [isXTurn ? 'X' : 'O']: prevPieces[isXTurn ? 'X' : 'O'] - 1
    }));

    // Switch to movement phase once all pieces are placed
    if (pieces.X === 1 && pieces.O === 1) {
      setPlacementPhase(false);
    }

    const winner = checkForWin(newBoard);
    if (winner) {
      handleGameEnd(winner);
    } else {
      setIsXTurn(!isXTurn);
    }
  };

  // Handle movement phase clicks
  const handleMoveClick = (index) => {
    if (selectedPiece === null) {
      // Select piece to move if it belongs to the current player
      if (board[index] === (isXTurn ? 'X' : 'O')) {
        setSelectedPiece(index);
      }
    } else {
      // Check if the selected piece can move to the clicked spot
      const selectedSpot = playablePositions.find((spot) => spot.index === selectedPiece);
      if (selectedSpot && selectedSpot.adjacent.includes(index) && !board[index]) {
        // Move piece to new spot
        const newBoard = [...board];
        newBoard[selectedPiece] = null; // Clear previous position
        newBoard[index] = isXTurn ? 'X' : 'O'; // Place at new position
        setBoard(newBoard);
        setSelectedPiece(null); // Deselect the piece

        const winner = checkForWin(newBoard);
        if (winner) {
          handleGameEnd(winner);
        } else {
          setIsXTurn(!isXTurn); // Switch turns
        }
      } else {
        // If move is invalid, deselect the piece
        setSelectedPiece(null);
      }
    }
  };

  // Render each square based on its index in the custom board layout
  const renderSquare = (index) => {
    return (
      <Button
        onClick={() => (placementPhase ? handlePlacementClick(index) : handleMoveClick(index))}
        sx={{
          width: '60px',
          height: '60px',
          border: '1px solid black',
          fontSize: '24px',
          cursor: 'pointer',
          backgroundColor: selectedPiece === index ? 'lightgray' : 'white'
        }}
      >
        {board[index]}
      </Button>
    );
  };

  return (
    <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={1}>
      {board.map((_, index) => renderSquare(index))}
      <Typography variant="h6" mt={2}>
        {isXTurn ? "X's Turn" : "O's Turn"}
      </Typography>
    </Box>
  );
};

export default GameBoard;
