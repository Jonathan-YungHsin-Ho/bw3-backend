const db = require('../data/dbConfig');

module.exports = {
  find,
  findById,
  findChildren,
  update,
  remove,
  addChild,
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
  return (
    db('communities')
      // .join('countries', 'countries.id', 'communities.country_id')
      // .select(
      //   'communities.id as community_id',
      //   'communities.community',
      //   'countries.country',
      // )
      .where({ id })
      .first()
  );
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

function update() {}

function remove() {}

function addChild() {}
