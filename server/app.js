const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {allowEIO3: true});



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
io.on("connect_error", (err) => {
  console.log(`connect_error due to ${err.message}`);
});

module.exports = {
  app,
  server
};
