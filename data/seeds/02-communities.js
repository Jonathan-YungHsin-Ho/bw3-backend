exports.seed = function(knex) {
  return knex('communities').insert([
    { community: 'Belem', country_id: 1 },
    { community: 'Fortaleza', country_id: 1 },
    { community: 'Manaus', country_id: 1 },
    { community: 'Sucre', country_id: 2 },
    { community: 'Trinidad', country_id: 2 },
    { community: 'El Torno', country_id: 2 },
    { community: 'Krassang', country_id: 3 },
    { community: 'Memot', country_id: 3 },
    { community: 'Samraong', country_id: 3 },
  ]);
};
