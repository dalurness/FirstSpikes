const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/webSockets.html');
});

io.on('connection', (socket) => {
  socket.on('message', (msg) => {
      io.emit('message', msg)
  })
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});