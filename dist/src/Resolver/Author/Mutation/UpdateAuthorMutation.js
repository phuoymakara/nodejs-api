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
exports.UpdateAuthorMutation = void 0;
const knexCreateConnection_1 = require("../../../lib/knexCreateConnection");
const UpdateAuthorMutation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const knex = (0, knexCreateConnection_1.knexCreateConnection)().default;
    const id = req.params.id;
    const { name, book_id, email, phone_number, sex, profile_picture } = req.body;
    const author = yield knex
        .table('authors')
        .update({
        name,
        book_id,
        email,
        phone_number,
        sex,
        profile_picture
    }).where({ id });
    if (author) {
        return res.status(200).json({
            message: 'Update successfully',
            author: author
        });
    }
    else {
        return res.json({
            message: 'Fail to update author'
        });
    }
});
exports.UpdateAuthorMutation = UpdateAuthorMutation;
//# sourceMappingURL=UpdateAuthorMutation.js.map