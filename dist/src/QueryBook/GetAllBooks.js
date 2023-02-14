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
exports.GetAllBooks = void 0;
const knexCreateConnection_1 = require("../lib/knexCreateConnection");
const GetAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const knex = (0, knexCreateConnection_1.knexCreateConnection)().default;
    const books = yield knex
        .table("books")
        .select("title", "description", "page", "author_id", "cover_picture", "authors.name")
        .innerJoin('authors', 'authors.id', 'author_id')
        .orderBy("books.id", "asc");
    if (books) {
        return res.status(200).json({ books: books });
    }
    else {
        throw new Error("Fail to get books");
    }
});
exports.GetAllBooks = GetAllBooks;
//# sourceMappingURL=GetAllBooks.js.map