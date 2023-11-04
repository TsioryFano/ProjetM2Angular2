import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

export const errorMiddleware: ErrorRequestHandler = (error, req: Request, res: Response, next: NextFunction) => {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong on the server.';
  
  res.status(status).send({
    status,
    message,
  });
};
