
exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('firstName');
    table.string('lastName');
    table.string('email');
    table.integer('age');
    table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP')); // table.timestamps(true, true);
    table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('users');
};
