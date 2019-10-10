const db = require('../data/dbConfig');

module.exports = {
  find,
  findById,
};

function find() {
  return db('communities');
}

function findById(id) {
  return db('communities')
    .join('countries', 'countries.id', 'communities.country_id')
    .select(
      'communities.id as community_id',
      'communities.community',
      'countries.country',
    )
    .where({ community_id: id })
    .first();
}
