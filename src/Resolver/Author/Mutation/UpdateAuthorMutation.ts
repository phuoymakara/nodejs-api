import express,{Request, Response, Router} from 'express'
import { knexCreateConnection } from '../../../lib/knexCreateConnection'
import { Auhtor } from '../../../SchemaBook/schemaAuthor'

export const UpdateAuthorMutation =  async( req : Request, res : Response)=>{
    const knex = knexCreateConnection().default
    const id = req.params.id 

    const { 
        name,
        book_id,
        email,
        phone_number,
        sex,
        profile_picture
        } : Auhtor = req.body 

    const author = await knex
        .table('authors')
        .update({
            name,
            book_id,
            email,
            phone_number,
            sex,
            profile_picture
            }).where({id})

    if(author){
        return res.status(200).json({
            message : 'Update successfully',
            author : author
         })
            
    }else{
        return res.json({
            message : 'Fail to update author'
        })
    }
}