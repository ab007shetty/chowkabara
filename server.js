
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

app.use(cors());
app.use(express.json());

const rooms = {}; // Object to track game state in each room

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // Create or join a room
    socket.on('joinRoom', (room) => {
        socket.join(room);
        if (!rooms[room]) {
            rooms[room] = { players: [], board: Array(9).fill(null) };
        }
        
        rooms[room].players.push(socket.id);
        io.to(room).emit('roomData', rooms[room]);
        
        if (rooms[room].players.length === 2) {
            io.to(room).emit('startGame');
        }
    });

    // Handle a move
    socket.on('makeMove', ({ room, index, player }) => {
        if (rooms[room] && rooms[room].board[index] === null) {
            rooms[room].board[index] = player;
            io.to(room).emit('boardUpdate', rooms[room].board);
        }
    });

    // Handle player disconnect
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
        for (const room in rooms) {
            rooms[room].players = rooms[room].players.filter(id => id !== socket.id);
            io.to(room).emit('playerLeft');
        }
    });
});

server.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
