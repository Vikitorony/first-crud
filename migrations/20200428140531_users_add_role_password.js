
exports.up = (knex) => {
  return knex.schema.alterTable('users', (table) => {
    table.string('passwordHash');
    table.enu('role', ['admin', 'user']).defaultTo('user');
  });
};

exports.down = (knex) => {
  return knex.schema.alterTable('users', (table) => {
    table.dropColumn('passwordHash');
    table.dropColumn('role');
  });
};
