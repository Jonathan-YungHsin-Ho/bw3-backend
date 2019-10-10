exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('weight_records')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('weight_records').insert([
        { id: 1, colName: 'rowValue1' },
        { id: 2, colName: 'rowValue2' },
        { id: 3, colName: 'rowValue3' },
      ]);
    });
};
