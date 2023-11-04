import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  
    try {
  
    const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).send('Access Denied / Unauthorized request');
  }

  const jwtSecret = process.env.JWT_SECRET;
if (!jwtSecret) {
  throw new Error('JWT_SECRET is not defined.');
}

    const decodedToken = jwt.verify(token, jwtSecret);
    req.user = decodedToken as any;
    next();
  } catch (error) {
    res.status(400).send('Invalid Token');
  }
};
