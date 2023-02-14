import { GetAllAuthorQuery } from './../Resolver/Author/Query/GetAllAuthorQuery';
import { UpdateBook } from './../QueryBook/UpdateBook';
import express,{Request, Response, Router} from 'express'
import {config} from 'dotenv'
import { knexCreateConnection } from '../lib/knexCreateConnection'
import { AddNewBook } from '../QueryBook/AddBook'
import { GetAllBooks } from '../QueryBook/GetAllBooks'
import { DeleteBook } from '../QueryBook/DeleteBook';
import validator from '../lib/validator';
import { GetOneBook } from '../QueryBook/GetOneBook';
import {bookSchema} from '../SchemaBook/SchemaBook';
import { CreateAuhtorMutation } from '../Resolver/Author/Mutation/CreateAuthorMutation';
import { GetOneAuthorQuery } from '../Resolver/Author/Query/GetOneAuthorQuery';
import { UpdateAuthorMutation } from '../Resolver/Author/Mutation/UpdateAuthorMutation';
import { DeleteAuthorMutation } from '../Resolver/Author/Mutation/DeleteAuthorMutation';

config()
const router = Router()

router.post('/api/v1/book/create', validator(bookSchema), AddNewBook)
router.get('/api/v1/books/get', GetAllBooks)
router.get('/api/v1/book/get/:id', GetOneBook)
router.put('/api/v1/book/update/:id', validator(bookSchema) ,UpdateBook)
router.delete('/api/v1/book/delete/:id', DeleteBook)

//Auhtor
router.post('/api/v1/author/create', CreateAuhtorMutation)
router.get('/api/v1/authors', GetAllAuthorQuery)
router.get('/api/v1/author/:id', GetOneAuthorQuery)
router.put('/api/v1/author/update/:id', UpdateAuthorMutation)
router.delete('/api/v1/author/delete/:id', DeleteAuthorMutation)

export default router