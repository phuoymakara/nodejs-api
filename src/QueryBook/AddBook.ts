import express,{Request, Response, Router} from 'express'
import {config} from 'dotenv'
import { knexCreateConnection } from '../lib/knexCreateConnection'
import { CreateBook } from '../SchemaBook/SchemaBook'
config()

const AddNewBook =  async( req : Request, res : Response) =>{
    const knex = knexCreateConnection().default
    const {title, description, page, author_id, cover_picture} = req.body as CreateBook

    const [createBook] = await knex.table('books').insert({
        title : title,
        description : description,
        page : page,
        author_id : author_id,
        cover_picture : cover_picture
    })
    

    if(createBook){
        return res.status(200).json({
            message : 'Successfully',
            book :{
                title,
                description,
                page,
                author_id,
                cover_picture
            }
        })
    }else{
        return res.status(500).json({
            message : 'Something went wrong!'
        })
    }
}

export {AddNewBook}