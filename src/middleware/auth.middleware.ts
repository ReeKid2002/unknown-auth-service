import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const authMiddleware = (schema: Joi.ObjectSchema<unknown>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);

    if(error) {
      res.status(400).json({ error: error.message as string });
      return;
    }

    next();
  };
};

export default authMiddleware;