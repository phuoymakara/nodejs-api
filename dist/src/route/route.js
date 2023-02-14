"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GetAllAuthorQuery_1 = require("./../Resolver/Author/Query/GetAllAuthorQuery");
const UpdateBook_1 = require("./../QueryBook/UpdateBook");
const express_1 = require("express");
const dotenv_1 = require("dotenv");
const AddBook_1 = require("../QueryBook/AddBook");
const GetAllBooks_1 = require("../QueryBook/GetAllBooks");
const DeleteBook_1 = require("../QueryBook/DeleteBook");
const validator_1 = __importDefault(require("../lib/validator"));
const GetOneBook_1 = require("../QueryBook/GetOneBook");
const SchemaBook_1 = require("../SchemaBook/SchemaBook");
const CreateAuthorMutation_1 = require("../Resolver/Author/Mutation/CreateAuthorMutation");
const GetOneAuthorQuery_1 = require("../Resolver/Author/Query/GetOneAuthorQuery");
const UpdateAuthorMutation_1 = require("../Resolver/Author/Mutation/UpdateAuthorMutation");
const DeleteAuthorMutation_1 = require("../Resolver/Author/Mutation/DeleteAuthorMutation");
(0, dotenv_1.config)();
const router = (0, express_1.Router)();
router.post('/api/v1/book/create', (0, validator_1.default)(SchemaBook_1.bookSchema), AddBook_1.AddNewBook);
router.get('/api/v1/books/get', GetAllBooks_1.GetAllBooks);
router.get('/api/v1/book/get/:id', GetOneBook_1.GetOneBook);
router.put('/api/v1/book/update/:id', (0, validator_1.default)(SchemaBook_1.bookSchema), UpdateBook_1.UpdateBook);
router.delete('/api/v1/book/delete/:id', DeleteBook_1.DeleteBook);
//Auhtor
router.post('/api/v1/author/create', CreateAuthorMutation_1.CreateAuhtorMutation);
router.get('/api/v1/authors', GetAllAuthorQuery_1.GetAllAuthorQuery);
router.get('/api/v1/author/:id', GetOneAuthorQuery_1.GetOneAuthorQuery);
router.put('/api/v1/author/update/:id', UpdateAuthorMutation_1.UpdateAuthorMutation);
router.delete('/api/v1/author/delete/:id', DeleteAuthorMutation_1.DeleteAuthorMutation);
exports.default = router;
//# sourceMappingURL=route.js.map