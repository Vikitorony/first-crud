
exports.up = (knex) => {
  return knex.schema.createTable('categories', (table) => {
    table.increments();
    table.string('name');
    table.enu('status', ['important', 'freetime', 'family']);
    table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP')); // table.timestamps(true, true);
    table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('categories');
};
