import { Request, Response, NextFunction } from 'express';


export const roleMiddleware = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const userRole = req.user?.roles;
    if (!userRole || !roles.includes(userRole)) {
      return res.status(403).send('Forbidden - You do not have permission to access this');
    }
    next();
  };
};
