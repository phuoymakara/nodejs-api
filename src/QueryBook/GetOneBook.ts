import express,{Request, Response, Router} from 'express'
import {config} from 'dotenv'
import { knexCreateConnection } from '../lib/knexCreateConnection'
import { Book } from '../SchemaBook/SchemaBook'
config()

export const GetOneBook = async( req : Request, res : Response)=>{
    const knex = knexCreateConnection().default
    const id = req.params.id

    const [book]: Book[] = await knex
                    .table('books')
                    .innerJoin('authors','author_id','authors.id')
                    .select(
                        'books.id',
                        'title',
                        'description',
                        'page',
                        'authors.name',
                        'cover_picture'
                    ).where("books.id", '=', id);


    if(book?.id){
        return res.status(200).json({ 
            book : {
                ...book
            }
        })
    }else{
        return res.json({ status: false, 
            message: 'Failed to get book' });
    }
}