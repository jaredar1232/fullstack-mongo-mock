// Express Server
// FIX ME :(
const express = require('express');
const server = express();

const cors = require("cors");
const colors = require("colors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const path = require('path');
const router = require('./router');
const port = 3000

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }))
server.use(cors());
server.use(morgan('combined'));
server.use('/', express.static(path.join(__dirname + '/../client/dist')));
server.use('/ibay', router)

server.listen(port, () => console.log('Connected to port: 3000'.magenta))

