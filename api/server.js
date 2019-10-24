const express = require('express');
const helmet = require('helmet');
const logger = require('../logger');
const cors = require('cors');

const AuthRouter = require('../auth/auth-router');
const UserRouter = require('../users/users-router');

const CountryRouter = require('../country/country-router');
const CommunityRouter = require('../community/community-router');
const ChildRouter = require('../child/child-router');

const restricted = require('../auth/restricted-middleware');

const server = express();

server.use(logger);
server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', AuthRouter);
server.use('/api/users', restricted, UserRouter);

server.use('/api/countries', CountryRouter);
server.use('/api/communities', restricted, CommunityRouter);
server.use('/api/children', restricted, ChildRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Hello world from ICNST Back End!</h2>`);
});

module.exports = server;
