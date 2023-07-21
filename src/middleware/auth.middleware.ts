import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const authBodyMiddleware = (schema: Joi.ObjectSchema<unknown>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);

    if(error) {
      res.status(400).json({ error: error.message as string });
      return;
    }

    next();
  };
};

const authParamsMiddleware = (schema: Joi.ObjectSchema<unknown>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.params);
    
    if(error) {
      res.status(400).json({ error: error.message as string });
      return;
    }

    next();
  };
};

export default {
  authBodyMiddleware,
  authParamsMiddleware,
};