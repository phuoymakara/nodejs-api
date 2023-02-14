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
exports.CreateAuhtorMutation = void 0;
const knexCreateConnection_1 = require("../../../lib/knexCreateConnection");
const CreateAuhtorMutation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const knex = (0, knexCreateConnection_1.knexCreateConnection)().default;
    const { name, book_id, email, phone_number, sex, profile_picture } = req.body;
    const [createAuhtor] = yield knex.table("authors").insert({
        name,
        book_id,
        email,
        phone_number,
        sex,
        profile_picture,
    });
    if (createAuhtor) {
        return res.status(200).json({
            message: "Successfully",
            book: {
                name,
                book_id,
                email,
                phone_number,
                sex,
                profile_picture,
            },
        });
    }
    else {
        return res.status(500).json({
            message: "Something went wrong!",
        });
    }
});
exports.CreateAuhtorMutation = CreateAuhtorMutation;
//# sourceMappingURL=CreateAuthorMutation.js.map