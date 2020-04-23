
exports.up = (knex) => {
  return knex.schema.createTable('todos', (table) => {
    table.increments();
    table.string('name');
    table.string('description');
    table.string('status');
    table.integer('user_id').unsigned().references('users.id');
    table.integer('category_id').unsigned().references('categories.id');
    table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP')); // table.timestamps(true, true);
    table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('todos');
};
