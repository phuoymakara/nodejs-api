import { config } from 'dotenv'
config()

module.exports = {
  development: {
    client: 'mysql2',
    connection: process.env.MYSQL_DEFAULT,
    pool: { min: 2, max: 10 },
    migrations: {
      extension: 'ts',
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`,
      disableMigrationsListValidation: true,
    },
    seeds: {
      extension: 'ts',
      directory: `${__dirname}/src/database/seeds`,
    },
    useNullAsDefault: true,
  },
}