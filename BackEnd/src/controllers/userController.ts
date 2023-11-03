import { mockUserList } from '../mock-user';
import { User } from '../models/user';
import { Request, Response } from 'express';

export const createUser = (req: Request, res: Response) => {
    const newUser = new User(
      mockUserList.length + 1,
      req.body.username,
      req.body.email,
      req.body.password // Encore une fois, les mots de passe ne doivent pas être stockés en clair
    );


    if (!newUser.validateEmail()) {
        return res.status(400).json({ message: 'Invalid email format' });
    }

    mockUserList.push(newUser);
    res.status(201).json(newUser);
};

export const getAllUsers = (req: Request, res: Response) => {
  res.json(mockUserList);
};

export const getUserById = (req: Request, res: Response) => {
  const user = mockUserList.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
};