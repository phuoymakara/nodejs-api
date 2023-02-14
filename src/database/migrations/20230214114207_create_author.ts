import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  if (!(await knex.schema.hasTable('authors'))) {
    return await knex.schema.createTable('authors', function (table) {
      table.increments()
      table.string('name')
      table.timestamps(true, true)
    })
  }
}

export async function down(knex: Knex): Promise<void> {}