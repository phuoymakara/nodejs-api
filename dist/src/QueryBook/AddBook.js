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
exports.AddNewBook = void 0;
const dotenv_1 = require("dotenv");
const knexCreateConnection_1 = require("../lib/knexCreateConnection");
(0, dotenv_1.config)();
const AddNewBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const knex = (0, knexCreateConnection_1.knexCreateConnection)().default;
    const { title, description, page, author_id, cover_picture } = req.body;
    const [createBook] = yield knex.table('books').insert({
        title: title,
        description: description,
        page: page,
        author_id: author_id,
        cover_picture: cover_picture
    });
    if (createBook) {
        return res.status(200).json({
            message: 'Successfully',
            book: {
                title,
                description,
                page,
                author_id,
                cover_picture
            }
        });
    }
    else {
        return res.status(500).json({
            message: 'Something went wrong!'
        });
    }
});
exports.AddNewBook = AddNewBook;
//# sourceMappingURL=AddBook.js.map