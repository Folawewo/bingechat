const express = require('express');
const cors = require('cors');
require('./connection');

const userRoutes = require('./routes/userRoutes');
const Message = require('./models/Message');

const app = express();

const PORT = 5001;

const rooms = ['general', 'tech', 'finance', 'crypto'];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/users', userRoutes);

const server = require('http').createServer(app);

const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

app.get('/rooms', () => {
  res.json(rooms);
});

async function getLastMessagesFromRoom(room) {
  let roomMessages = await Message.aggregate([
    { $match: { to: room } },
    { group: { _id: '$date', messageByDate: { $push: '$$ROOT' } } },
  ]);
  return roomMessages;
}

function sortRoomMessagesByDate(messages) {
  return messages.sort(function(a, b) {
    let date1 = a._id.split('/')
  })
}

// socket connection

io.on('connection', (socket) => {

  socket.on('join-room', async (room) => {
    socket.join(room);
    let roomMessages = await getLastMessagesFromRoom()

  });
  ``;
});

server.listen(PORT, () => {
  console.log(`listening to port ${PORT}...`);
});
