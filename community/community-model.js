const db = require('../data/dbConfig');

module.exports = {
  find,
  findById,
  findChildren,
  add,
  // update,
  remove,
};

function find() {
  return db('communities')
    .join('countries', 'countries.id', 'communities.country_id')
    .select(
      'communities.id as community_id',
      'communities.community',
      'countries.country',
    );
}

function findById(id) {
  return db('communities')
    .join('countries', 'countries.id', 'communities.country_id')
    .select(
      'communities.id',
      'communities.community',
      'countries.country',
      'communities.country_id',
    )
    .where('communities.id', id)
    .first();
}

function findChildren(id) {
  return db('children')
    .join('countries', 'countries.id', 'children.country_id')
    .join('communities', 'communities.id', 'children.community_id')
    .select(
      'children.id',
      'children.name',
      'children.parent_name',
      'children.contact',
      'children.gender',
      'children.DOB',
      'countries.country',
      'communities.community',
    )
    .where({ community_id: id });
}

function add(community) {
  return db('communities')
    .insert(community, 'id')
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

// function update() {}

function remove(id) {
  return db('communities')
    .where({ id })
    .del();
}
