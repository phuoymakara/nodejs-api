import express, { Request, Response} from "express";
import { knexCreateConnection } from "../../../lib/knexCreateConnection";
import {  AuthorInput } from "../../../SchemaBook/schemaAuthor";

const CreateAuhtorMutation = async (req: Request, res: Response) => {
  const knex = knexCreateConnection().default;
  const { name, book_id, email, phone_number, sex, profile_picture } =
    req.body as AuthorInput;

  const [createAuhtor] = await knex.table("authors").insert({
    name,
    book_id,
    email,
    phone_number,
    sex,
    profile_picture,
  });

  if (createAuhtor) {
    return res.status(200).json({
      message: "Successfully",
      book: {
        name,
        book_id,
        email,
        phone_number,
        sex,
        profile_picture,
      },
    });
  } else {
    return res.status(500).json({
      message: "Something went wrong!",
    });
  }
};

export { CreateAuhtorMutation };
