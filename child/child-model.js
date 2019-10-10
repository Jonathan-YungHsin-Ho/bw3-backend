const db = require('../data/dbConfig');

module.exports = {
  find,
  findById,
};

function find() {
  return db('children');
}

function findById(id) {
  return db('children')
    .join('countries', 'countries.id', 'children.country_id')
    .join('communities', 'communities.id', 'children.community_id')
    .select(
      'children.id as child_id',
      'children.name',
      'children.parent_name',
      'children.contact',
      'children.gender',
      'children.DOB',
      'countries.country',
      'communities.community',
    )
    .where({ child_id: id })
    .first();
}
