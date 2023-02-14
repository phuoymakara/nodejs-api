import knex from 'knex'
import { config } from 'dotenv'
config()

export const knexCreateConnection = () => {
  return {
    default: knex({
      client: 'mysql2',
      connection: process.env.MYSQL_DEFAULT,
      pool: {
        max: 10,
        min: 3,
      },
    }),
  }
}