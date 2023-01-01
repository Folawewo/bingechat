const express = require('express');
const cors = require('cors');
require('./connection');

const app = express();

const PORT = 5001;

const rooms = ['general', 'tech', 'finance', 'crypto'];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const server = require('http').createServer(app);

const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

server.listen(PORT, () => {
  console.log(`listening to port ${PORT}...`);
});
