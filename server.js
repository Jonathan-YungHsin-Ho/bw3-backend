const express = require('express');
const helmet = require('helmet');
const logger = require('./logger');

const countryRouter = require('./country/country-router');
const communityRouter = require('./community/community-router');
const childRouter = require('./child/child-router');

const server = express();

server.use(logger);
server.use(helmet());
server.use(express.json());

server.use('/api/countries', countryRouter);
server.use('/api/communities', communityRouter);
server.use('/api/children', childRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Hello world from ICNST Back End!</h2>`);
});

module.exports = server;
