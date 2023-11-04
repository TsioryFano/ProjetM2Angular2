// src/types/express.d.ts

import { User } from '../models/user'; // Assurez-vous que le chemin est correct

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}
