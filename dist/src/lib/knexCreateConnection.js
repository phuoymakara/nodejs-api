"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.knexCreateConnection = void 0;
const knex_1 = __importDefault(require("knex"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const knexCreateConnection = () => {
    return {
        default: (0, knex_1.default)({
            client: 'mysql2',
            connection: process.env.MYSQL_DEFAULT,
            pool: {
                max: 10,
                min: 3,
            },
        }),
    };
};
exports.knexCreateConnection = knexCreateConnection;
//# sourceMappingURL=knexCreateConnection.js.map