import { NextFunction, Request, Response } from 'express';
import { AnySchema } from 'yup';

const validator = (schema) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await schema.validate({
      body: req.body,
      query: req.query,
      param: req.params,
    });

    next();
  } catch (error) {
    return res.status(500).json({ type: error.name, message: error.message });
  }
};

export default validator;