exports.up = function(knex) {
  return knex.schema
    .createTable('countries', tbl => {
      tbl.increments();
      tbl
        .string('country', 128)
        .notNullable()
        .unique();
    })
    .createTable('communities', tbl => {
      tbl.increments();
      tbl.string('community', 128).notNullable();
      tbl
        .integer('country_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('countries')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('children', tbl => {
      tbl.increments();
      tbl.string('name', 128).notNullable();
      tbl.string('parent_name', 128).notNullable();
      tbl.string('contact', 128).notNullable();
      tbl.string('gender', 128).notNullable();
      tbl.date('DOB').notNullable();
      tbl
        .integer('community_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('communities')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl
        .integer('country_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('countries')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('height_records', tbl => {
      tbl.increments();
      tbl.date('date').notNullable();
      tbl.float('height').notNullable();
      tbl
        .integer('child_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('children')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('weight_records', tbl => {
      tbl.increments();
      tbl.date('date').notNullable();
      tbl.float('weight').notNullable();
      tbl
        .integer('child_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('children')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('weight_records')
    .dropTableIfExists('height_records')
    .dropTableIfExists('children')
    .dropTableIfExists('communities')
    .dropTableIfExists('countries');
};
