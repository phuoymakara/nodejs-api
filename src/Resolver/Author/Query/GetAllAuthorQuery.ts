import { Book } from './../../../SchemaBook/SchemaBook';
import express, { Request, Response, Router } from "express";
import { knexCreateConnection } from "../../../lib/knexCreateConnection";
import { Auhtor } from "../../../SchemaBook/schemaAuthor";
import { number } from 'joi';

export const GetAllAuthorQuery = async (req: Request, res: Response) => {
  const knex = knexCreateConnection().default;

    //const books: Book[] = await knex.table('books').whereIn('author_id', author_id)
  const loadBook= async(id:number)=>{
      const books : Book[]= await knex.table('books')
                                      .select('')
                                      .where(`books.author_id`,`=`,id)
    return  [books]
  }
  //console.log(loadBook)
  const authors: Auhtor[] = await knex
    .table("authors")
    .select("id","name", "phone_number", "profile_picture", "sex", "email")
    .orderBy("authors.id", "asc");

    
    if(authors) {
        return res.status(200).json({ authors : authors.map((author) => {
          return {
            ...author,
            books: loadBook(author.id)
          }
    }) });
  }else{
    throw new Error("Fail to get books");
  }
};


