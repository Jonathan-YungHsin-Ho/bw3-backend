const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  return knex('users').insert([
    {
      username: 'braziluser',
      password: bcrypt.hashSync('braziluser', 8),
      role: 'user',
      country: 'Brazil',
    },
    {
      username: 'boliviauser',
      password: bcrypt.hashSync('boliviauser', 8),
      role: 'user',
      country: 'Bolivia',
    },
    {
      username: 'cambodiauser',
      password: bcrypt.hashSync('cambodiauser', 8),
      role: 'user',
      country: 'Cambodia',
    },
    {
      username: 'anna',
      password: bcrypt.hashSync('anna', 8),
      role: 'admin',
    },
    {
      username: 'jonathan',
      password: bcrypt.hashSync('jonathan', 8),
      role: 'admin',
    },
    {
      username: 'sandy',
      password: bcrypt.hashSync('sandy', 8),
      role: 'admin',
    },
    {
      username: 'zach',
      password: bcrypt.hashSync('zach', 8),
      role: 'admin',
    },
    {
      username: 'zachary',
      password: bcrypt.hashSync('zachary', 8),
      role: 'admin',
    },
    {
      username: 'zeleke',
      password: bcrypt.hashSync('zeleke', 8),
      role: 'admin',
    },
  ]);
};
