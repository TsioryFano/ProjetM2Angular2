// Dans utils/password.ts
import bcrypt from 'bcrypt';

// La valeur de sel détermine la complexité du hachage, 10 est une valeur communément utilisée
const saltRounds = 10;

export const hashPassword = (plainTextPassword: string): Promise<string> => {
  return bcrypt.hash(plainTextPassword, saltRounds);
};
