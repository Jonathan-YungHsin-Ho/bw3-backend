const db = require('../data/dbConfig');

module.exports = {
  find,
  findById,
  findCommunities,
  add,
  // update,
  remove,
};

function find() {
  return db('countries');
}

function findById(id) {
  return db('countries')
    .where({ id })
    .first();
}

function findCommunities(id) {
  return db('communities')
    .join('countries', 'countries.id', 'communities.country_id')
    .select('communities.id', 'communities.community', 'countries.country')
    .where({ country_id: id });
}

function add(country) {
  return db('countries')
    .insert(country, 'id')
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

// function update() {}

function remove(id) {
  return db('countries')
    .where({ id })
    .del();
}
