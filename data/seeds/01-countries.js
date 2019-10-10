exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('countries')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('countries').insert([
        { country: 'Brazil' },
        { country: 'Bolivia' },
        { country: 'Cambodia' },
      ]);
    });
};
