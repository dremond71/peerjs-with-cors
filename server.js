require('dotenv').config();
const express = require('express');
const { ExpressPeerServer } = require('peer');
const app = express();
const http = require('http');
const port = process.env.SERVER_PORT || 3002;
const cors = require('cors');

const server = http.createServer(app);
const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: '/',
});
app.use(cors());
app.use('/', peerServer);
console.log(`server is listening on port ${port}`);
server.listen(port);
