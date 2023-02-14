import express,{Request, Response, Router} from 'express'
import { knexCreateConnection } from '../lib/knexCreateConnection'

export const DeleteBook =  async( req : Request, res : Response)=>{
    const knex = knexCreateConnection().default
    const id = req.params.id

    const {title, description, page, author_id, cover_picture} = req.body

    const book = await knex.table('books').delete().where({id})

    if(book){
        return res.status(200).json({
            message : 'Delete successfully',
            book : book
         })
            
    }else{
        return res.json({
            message : 'Fail to delete book'
        })
    }
}