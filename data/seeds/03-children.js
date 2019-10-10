exports.seed = function(knex) {
  return knex('children').insert([
    {
      name: 'Jane',
      parent_name: 'Mrs. Doe',
      contact: 'mrs.doe@gmail.com',
      gender: 'F',
      community_id: 1,
      country_id: 1,
      DOB: '09/28/2010',
    },
    {
      name: 'Jose',
      parent_name: 'Mr. Machado',
      contact: 'machado@email.com',
      gender: 'M',
      community_id: 1,
      country_id: 1,
      DOB: '09/28/2010',
    },
    {
      name: 'Paulo',
      parent_name: 'Ms. Moreno',
      contact: 'moreno@email.com',
      gender: 'M',
      community_id: 2,
      country_id: 1,
      DOB: '09/28/2010',
    },
    {
      name: 'Joao',
      parent_name: 'Mr. Antunes',
      contact: 'antunes@email.com',
      gender: 'M',
      community_id: 2,
      country_id: 1,
      DOB: '09/28/2010',
    },
    {
      name: 'Amanda',
      parent_name: 'Ms. Andrade',
      contact: 'andrade@email.com',
      gender: 'F',
      community_id: 3,
      country_id: 1,
      DOB: '09/28/2010',
    },
    {
      name: 'Yessica',
      parent_name: 'Mr. Nunez',
      contact: 'nunez@email.com',
      gender: 'F',
      community_id: 3,
      country_id: 1,
      DOB: '09/28/2010',
    },
    {
      name: 'Gabrela',
      parent_name: 'Mrs. Rodriquez',
      contact: 'rodriquez@email.com',
      gender: 'F',
      community_id: 4,
      country_id: 2,
      DOB: '09/28/2010',
    },
    {
      name: 'Erika',
      parent_name: 'Mr. Dipierri',
      contact: 'dipierri@email.com',
      gender: 'F',
      community_id: 4,
      country_id: 2,
      DOB: '09/28/2010',
    },
    {
      name: 'Sergio',
      parent_name: 'Mrs. Alfaro',
      contact: 'alfaro@email.com',
      gender: 'M',
      community_id: 5,
      country_id: 2,
      DOB: '09/28/2010',
    },
    {
      name: 'Ronaldino',
      parent_name: 'Mr. Gomez',
      contact: 'gomez@email.com',
      gender: 'M',
      community_id: 5,
      country_id: 2,
      DOB: '09/28/2010',
    },
    {
      name: 'Aliz',
      parent_name: 'Mrs. Scapoli',
      contact: 'scapoli@email.com',
      gender: 'F',
      community_id: 6,
      country_id: 2,
      DOB: '09/28/2010',
    },
    {
      name: 'Alejandro',
      parent_name: 'Mr. Mamolini',
      contact: 'mamolini@email.com',
      gender: 'M',
      community_id: 6,
      country_id: 2,
      DOB: '09/28/2010',
    },
    {
      name: 'Mrs. Salvatori',
      parent_name: 'Ms. Moreno',
      contact: 'salvatori@email.com',
      gender: 'F',
      community_id: 7,
      country_id: 3,
      DOB: '09/28/2010',
    },
    {
      name: 'Paulo',
      parent_name: 'Mr. Gaathaa',
      contact: 'gaathaa@email.com',
      gender: 'M',
      community_id: 7,
      country_id: 3,
      DOB: '09/28/2010',
    },
    {
      name: 'Devi',
      parent_name: 'Mrs. Teteny',
      contact: 'teteny@email.com',
      gender: 'F',
      community_id: 8,
      country_id: 3,
      DOB: '09/28/2010',
    },
    {
      name: 'Pich',
      parent_name: 'Mr. Cho',
      contact: 'moreno@email.com',
      gender: 'F',
      community_id: 8,
      country_id: 3,
      DOB: '09/28/2010',
    },
    {
      name: 'Poeu',
      parent_name: 'Mrs. Talin',
      contact: 'talin@email.com',
      gender: 'M',
      community_id: 9,
      country_id: 3,
      DOB: '09/28/2010',
    },
    {
      name: 'Gaadhi',
      parent_name: 'Mr. Baadal',
      contact: 'baadal@email.com',
      gender: 'M',
      community_id: 9,
      country_id: 3,
      DOB: '09/28/2010',
    },
  ]);
};
