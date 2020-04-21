
exports.up = (knex) => {
  return knex.schema.createTable('groups', (table) => {
    table.increments();
    table.string('name');
    table.string('description');
    table.string('location');
    table.integer('maximalSize');
    table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP')); // table.timestamps(true, true);
    table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('groups');
};
