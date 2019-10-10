const db = require('../data/dbConfig');

module.exports = {
  find,
  findById,
};

function find() {
  return db('countries');
}

function findById(id) {
  return db('countries')
    .where({ id })
    .first();
}
