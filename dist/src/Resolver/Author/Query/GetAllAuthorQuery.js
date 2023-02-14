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
exports.GetAllAuthorQuery = void 0;
const knexCreateConnection_1 = require("../../../lib/knexCreateConnection");
const GetAllAuthorQuery = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const knex = (0, knexCreateConnection_1.knexCreateConnection)().default;
    //const books: Book[] = await knex.table('books').whereIn('author_id', author_id)
    const loadBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
        const books = yield knex.table('books')
            .select('')
            .where(`books.author_id`, `=`, id);
        return [books];
    });
    //console.log(loadBook)
    const authors = yield knex
        .table("authors")
        .select("id", "name", "phone_number", "profile_picture", "sex", "email")
        .orderBy("authors.id", "asc");
    if (authors) {
        return res.status(200).json({ authors: authors.map((author) => {
                return Object.assign(Object.assign({}, author), { books: loadBook(author.id) });
            }) });
    }
    else {
        throw new Error("Fail to get books");
    }
});
exports.GetAllAuthorQuery = GetAllAuthorQuery;
//# sourceMappingURL=GetAllAuthorQuery.js.map