// Dans votre fichier userController.ts

import { mockUserList } from '../../mock/mock-user';
import { User } from '../../models/user';
import { Request, Response } from 'express';
import { hashPassword } from '../../utils/password'; // Supposons que vous avez une fonction utilitaire pour hasher les mots de passe
import { validateUser } from '../../validators/userValidator'; // Supposons que vous avez un validateur Joi ou class-validator

export const createUser = async (req: Request, res: Response) => {
  try{
  // Valider l'entrée utilisateur avec Joi ou class-validator ici
  const { isValid, errors, validatedData } = validateUser(req.body);

  if (!isValid) {
    return res.status(400).json({ errors });
  }

  // Hasher le mot de passe avant de l'enregistrer
  const hashedPassword = await hashPassword(validatedData.password);

  const newUser = new User(
    (mockUserList.length + 1).toString(),
    validatedData.username,
    validatedData.email,
    hashedPassword,
    validatedData.roles,
    validatedData.tutorialGroupType,
    validatedData.teachingUnits
  );
// Enregistrer le nouvel utilisateur (dans une vraie application, cela impliquerait de sauvegarder dans une base de données)
mockUserList.push(newUser);

// Retourner l'utilisateur créé, sans le mot de passe hashé pour des raisons de sécurité
const { password, ...userDataWithoutPassword } = newUser;
res.status(201).json(userDataWithoutPassword);
} catch (error) {
console.error('Erreur lors du hachage du mot de passe:', error);
res.status(500).json({ message: "Erreur lors de la création de l'utilisateur." });
}
};

export const getAllUsers = (req: Request, res: Response) => {
  let users = mockUserList;

  // Filtrage (si des filtres sont fournis)
  if (req.query.role) {
    users = users.filter(user => user.roles.includes(req.query.role as string));
  }

  // Tri (par exemple, par nom d'utilisateur)
  // Remplacez `username` par le champ approprié si nécessaire
  if (req.query.sortBy) {
    const sortBy = req.query.sortBy as string;
    const sortOrder = req.query.sortOrder === 'desc' ? -1 : 1;
    users = users.sort((a, b) => a[sortBy].localeCompare(b[sortBy]) * sortOrder);
  }

  // Pagination
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const paginatedUsers = users.slice(startIndex, endIndex);

  // Envoi de la réponse paginée, avec des informations de pagination si désiré
  res.status(200).json({
    page,
    limit,
    totalCount: users.length,
    users: paginatedUsers,
  });
};

export const getUserById = (req: Request, res: Response) => {
  const userId = req.params.id; // Les IDs sont des chaînes de caractères
  const user = mockUserList.find(user => user.userId === userId);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.status(200).json(user);
};
