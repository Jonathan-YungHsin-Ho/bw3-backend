const db = require('../data/dbConfig');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function add(user) {
  return db('users')
    .insert(user, 'id')
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function find() {
  return db('users').select('id', 'username', 'role', 'country_id');
}

function findBy(filter) {
  return db('users').where(filter);
}

function findById(id) {
  return db('users')
    .select('id', 'username', 'role', 'country_id')
    .where({ id })
    .first();
}
