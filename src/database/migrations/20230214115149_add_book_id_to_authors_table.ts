import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.table('authors', function (table) {
    table.integer('book_id');
    table.string('phone_number');
    table.string('profile_picture');
    table.string('sex');
    table.string('email');
  });
}

export async function down(knex: Knex): Promise<void> {}
