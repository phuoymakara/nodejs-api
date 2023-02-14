import express, { Request, Response, Router } from "express";
import { knexCreateConnection } from "../lib/knexCreateConnection";

export const GetAllBooks = async (req: Request, res: Response) => {
  const knex = knexCreateConnection().default;
  const books = await knex
    .table("books")
    .select("title", "description", "page", "author_id", "cover_picture","authors.name")
    .innerJoin('authors','authors.id','author_id')
    .orderBy("books.id", "asc");

  if (books) {
    return res.status(200).json({ books: books });
  } else {
    throw new Error("Fail to get books");
  }
};
