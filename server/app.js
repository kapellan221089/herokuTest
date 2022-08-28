const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);



io.on('connection', socket => {
  console.log('start socket')
  console.log('start socket')
  console.log('start socket')
  console.log('start socket')
  console.log('start socket')
  console.log('start socket')
  socket.on('join', data=>{
    console.log(data)
    console.log(data)
    console.log(data)
    console.log(data)
    console.log(data)
  })
});

module.exports = {
  app,
  server
};
