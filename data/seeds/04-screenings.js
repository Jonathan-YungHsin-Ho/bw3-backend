exports.seed = function(knex) {
  return knex('screenings').insert([
    { child_id: 1, date: '04/12/2010', height: 33.1, weight: 26.5 },
    { child_id: 1, date: '05/12/2010', height: 33.8, weight: 30.1 },
    { child_id: 1, date: '10/05/2011', height: 40.2, weight: 35.4 },
    { child_id: 2, date: '04/12/2010', height: 42.5, weight: 26.5 },
    { child_id: 2, date: '05/12/2010', height: 43.0, weight: 30.1 },
    { child_id: 2, date: '10/05/2011', height: 47.0, weight: 35.4 },
    { child_id: 3, date: '04/12/2010', height: 22.5, weight: 26.5 },
    { child_id: 3, date: '05/12/2010', height: 23.0, weight: 30.1 },
    { child_id: 3, date: '10/05/2011', height: 25.1, weight: 35.4 },
    { child_id: 4, date: '04/12/2010', height: 33.7, weight: 26.5 },
    { child_id: 4, date: '05/12/2010', height: 33.8, weight: 30.1 },
    { child_id: 4, date: '10/05/2010', height: 40.5, weight: 35.4 },
    { child_id: 5, date: '04/12/2010', height: 42.5, weight: 26.5 },
    { child_id: 5, date: '05/12/2010', height: 43.0, weight: 30.1 },
    { child_id: 5, date: '10/05/2011', height: 47.6, weight: 35.4 },
    { child_id: 6, date: '04/12/2010', height: 22.5, weight: 26.5 },
    { child_id: 6, date: '05/12/2010', height: 23.0, weight: 30.1 },
    { child_id: 6, date: '10/05/2011', height: 24.3, weight: 35.4 },
    { child_id: 7, date: '04/12/2010', height: 33.7, weight: 26.5 },
    { child_id: 7, date: '05/12/2010', height: 33.8, weight: 30.1 },
    { child_id: 7, date: '10/05/2011', height: 40.8, weight: 35.4 },
    { child_id: 8, date: '04/12/2010', height: 42.5, weight: 26.5 },
    { child_id: 8, date: '05/12/2010', height: 43.0, weight: 30.1 },
    { child_id: 8, date: '10/05/2011', height: 47.1, weight: 35.4 },
    { child_id: 9, date: '04/12/2010', height: 22.5, weight: 26.5 },
    { child_id: 9, date: '05/12/2010', height: 23.0, weight: 30.1 },
    { child_id: 9, date: '10/05/2011', height: 25.3, weight: 35.4 },
    { child_id: 10, date: '04/12/2010', height: 33.1, weight: 26.5 },
    { child_id: 10, date: '05/12/2010', height: 33.8, weight: 30.1 },
    { child_id: 10, date: '10/05/2011', height: 41.2, weight: 35.4 },
    { child_id: 11, date: '04/12/2010', height: 42.5, weight: 26.5 },
    { child_id: 11, date: '05/12/2010', height: 43.0, weight: 30.1 },
    { child_id: 11, date: '10/05/2011', height: 43.2, weight: 35.4 },
    { child_id: 12, date: '04/12/2010', height: 22.5, weight: 26.5 },
    { child_id: 12, date: '05/12/2010', height: 23.0, weight: 30.1 },
    { child_id: 12, date: '10/05/2011', height: 25.2, weight: 35.4 },
    { child_id: 13, date: '04/12/2010', height: 33.1, weight: 26.5 },
    { child_id: 13, date: '05/12/2010', height: 33.8, weight: 30.1 },
    { child_id: 13, date: '10/05/2011', height: 40.5, weight: 35.4 },
    { child_id: 14, date: '04/12/2010', height: 42.5, weight: 26.5 },
    { child_id: 14, date: '05/12/2010', height: 43.0, weight: 30.1 },
    { child_id: 14, date: '10/05/2011', height: 47.1, weight: 35.4 },
    { child_id: 15, date: '04/12/2010', height: 22.5, weight: 26.5 },
    { child_id: 15, date: '05/12/2010', height: 23.0, weight: 30.1 },
    { child_id: 15, date: '10/05/2011', height: 25.0, weight: 35.4 },
    { child_id: 16, date: '04/12/2010', height: 33.1, weight: 26.5 },
    { child_id: 16, date: '05/12/2010', height: 33.8, weight: 30.1 },
    { child_id: 16, date: '10/05/2011', height: 40.2, weight: 35.4 },
    { child_id: 17, date: '04/12/2010', height: 42.5, weight: 26.5 },
    { child_id: 17, date: '05/12/2010', height: 43.0, weight: 30.1 },
    { child_id: 17, date: '10/05/2011', height: 47.0, weight: 35.4 },
    { child_id: 18, date: '04/12/2010', height: 22.5, weight: 26.5 },
    { child_id: 18, date: '05/12/2010', height: 23.0, weight: 30.1 },
    { child_id: 18, date: '10/05/2011', height: 25.0, weight: 35.4 },
  ]);
};
