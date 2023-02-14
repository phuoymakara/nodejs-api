import * as yup from 'yup';

export const bookSchema = yup.object({
  body: yup.object({
    title:  yup.string().min(3).required(),
    description: yup.string().min(3).optional(),
    page: yup.number().min(1).required(),
  }),
});

//module.exports = bookSchema;

export interface CreateBook extends yup.InferType<typeof bookSchema> {
  title: null | string;
  description: null | string;
  page: null | number;
  author_id?: null | number;
  cover_picture?: null | string;
}

export interface Book {
  id: number,
  title:  string;
  description:  string;
  page:  number;
  author_id?:  number;
  cover_picture?:string;
}

