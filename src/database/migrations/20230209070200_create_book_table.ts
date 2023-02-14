import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  if (!(await knex.schema.hasTable('books'))) {
    return await knex.schema.createTable('books', function (table) {
      table.increments()
      table.string('title')
      table.text('description')
      table.integer('page')
      table.integer('author_id')
      table.string('cover_picture')
      table.timestamps(true, true)
    })
  }
}

export async function down(knex: Knex): Promise<void> {}