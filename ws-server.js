const WSServer = require('ws').Server;
const server = require('http').createServer();
const app = require('./http-server');

const PORT = process.env.PORT || 7070;

// Create web socket server on top of a regular http server
const wss = new WSServer({
  server: server
});

// Also mount the app here
server.on('request', app);

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log(`received: ${message}`);
    ws.send(JSON.stringify({
      answer: 42
    }));
  });
});


server.listen(PORT, function() {
  console.log(`http/ws server listening on ${PORT}`);
});