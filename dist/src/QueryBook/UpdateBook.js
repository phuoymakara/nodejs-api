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
exports.UpdateBook = void 0;
const knexCreateConnection_1 = require("../lib/knexCreateConnection");
const UpdateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const knex = (0, knexCreateConnection_1.knexCreateConnection)().default;
    const id = req.params.id;
    const { title, description, page, author_id, cover_picture } = req.body;
    const book = yield knex.table('books').update({
        title: title,
        description: description,
        page: page,
        author_id: author_id,
        cover_picture: cover_picture
    }).where({ id });
    if (book) {
        return res.status(200).json({
            message: 'Update successfully',
            book: book
        });
    }
    else {
        return res.json({
            message: 'Fail to update book'
        });
    }
});
exports.UpdateBook = UpdateBook;
//# sourceMappingURL=UpdateBook.js.map