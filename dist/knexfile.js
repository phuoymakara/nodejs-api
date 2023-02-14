"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
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
};
//# sourceMappingURL=knexfile.js.map