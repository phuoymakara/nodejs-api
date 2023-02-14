import express,{Request, Response, Router} from 'express'
import { Auhtor } from '../../../SchemaBook/schemaAuthor'
import { knexCreateConnection } from '../../../lib/knexCreateConnection'
import { Book } from '../../../SchemaBook/SchemaBook'

export const GetOneAuthorQuery = async( req : Request, res : Response)=>{
    const knex = knexCreateConnection().default
    const id_req = Number(req.params.id)

    const author: Auhtor[] = await knex.table('authors').where({id: id_req})
    const books : Book[] = await knex
                                .table('books')
                                .select('id','title','description')       
                                .where(`books.author_id`,`=`,id_req)
    // const author: Auhtor await knex
    
    if(author){
        return res.status(200).json({
            author:{
                ...author,
                books: {
                    ...books
                }
            }
        })
    }else{
        return res.json({ 
            status: false, 
            message: 'Failed to get author' 
            });
    }
}