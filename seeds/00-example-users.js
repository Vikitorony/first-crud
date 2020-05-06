const bcrypt = require('bcrypt');
exports.seed = (knex) => {
  return knex('users').insert([
    {
      firstName: 'Jakab',
      lastName: 'Gipsz',
      email: 'jakab@gipsz.com',
      password: bcrypt.hashSync('abc123', 10),
      age: 33,
      groupId: 1,
      role: 'admin'
    },
    {
      firstName: 'Tasi',
      lastName: 'Test',
      email: 'tasi@teszt.com',
      password: bcrypt.hashSync('abc123', 10),
      age: 33,
      groupId: 1,
      role: 'admin'
    }
  ]);
};
