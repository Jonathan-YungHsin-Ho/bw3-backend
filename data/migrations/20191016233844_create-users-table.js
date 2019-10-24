exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments();
    tbl
      .string('username', 128)
      .notNullable()
      .unique();
    tbl.string('password', 128).notNullable();
    tbl.string('role', 128).notNullable();
    tbl
      .integer('country_id')
      .unsigned()
      .references('id')
      .inTable('countries')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
