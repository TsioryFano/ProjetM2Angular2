import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export const validateMiddleware = (schema: Joi.ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      const errors = error.details.map((e) => e.message);
      return res.status(400).json({ errors });
    }
    
    next();
  };
};
