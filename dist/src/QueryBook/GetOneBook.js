"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOneBook = void 0;
const dotenv_1 = require("dotenv");
const knexCreateConnection_1 = require("../lib/knexCreateConnection");
(0, dotenv_1.config)();
const GetOneBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const knex = (0, knexCreateConnection_1.knexCreateConnection)().default;
    const id = req.params.id;
    const [book] = yield knex
        .table('books')
        .innerJoin('authors', 'author_id', 'authors.id')
        .select('books.id', 'title', 'description', 'page', 'authors.name', 'cover_picture').where("books.id", '=', id);
    if (book === null || book === void 0 ? void 0 : book.id) {
        return res.status(200).json({
            book: Object.assign({}, book)
        });
    }
    else {
        return res.json({ status: false,
            message: 'Failed to get book' });
    }
});
exports.GetOneBook = GetOneBook;
//# sourceMappingURL=GetOneBook.js.map