const express = require('express');
const helmet = require('helmet');
const logger = require('./logger');
const cors = require('cors');

const countryRouter = require('./country/country-router');
const communityRouter = require('./community/community-router');
const childRouter = require('./child/child-router');

const loginRouter = require('./login/login-router');
const registerRouter = require('./register/register-router');

const server = express();

server.use(logger);
server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/countries', countryRouter);
server.use('/api/communities', communityRouter);
server.use('/api/children', childRouter);

server.use('/api/login', loginRouter);
server.use('/api/register', registerRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Hello world from ICNST Back End!</h2>`);
});

module.exports = server;
