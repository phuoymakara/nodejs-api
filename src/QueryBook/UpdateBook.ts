import express,{Request, Response, Router} from 'express'
import { knexCreateConnection } from '../lib/knexCreateConnection'

export const UpdateBook =  async( req : Request, res : Response)=>{
    const knex = knexCreateConnection().default
    const id = req.params.id 

    const {title, description, page, author_id, cover_picture} = req.body 

    const book = await knex.table('books').update({
        title : title,
        description : description,
        page : page,
        author_id : author_id,
        cover_picture : cover_picture
    }).where({id})

    if(book){
        return res.status(200).json({
            message : 'Update successfully',
            book : book
         })
            
    }else{
        return res.json({
            message : 'Fail to update book'
        })
    }
}