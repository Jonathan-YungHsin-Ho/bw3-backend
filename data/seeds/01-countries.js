exports.seed = function(knex) {
  return knex('countries').insert([
    { country: 'Brazil' },
    { country: 'Bolivia' },
    { country: 'Cambodia' },
  ]);
};
