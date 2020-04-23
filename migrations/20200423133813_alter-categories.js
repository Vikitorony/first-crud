
exports.up = (knex) => {
  return knex.schema.table('categories', (table) => {
    table.enum('status', ['important', 'freetime', 'family']).alter();
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('categories');
};
