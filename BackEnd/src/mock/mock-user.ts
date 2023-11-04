// mock/mock-user.ts

interface IUser {
  [key: string]: any;  // Ceci permet d'accéder à n'importe quelle propriété avec une clé string
  userId: string;
  username: string;
  email: string;
  password: string;
  roles: string[];
  tutorialGroupType?: string;
  teachingUnits?: any[]; // Remplacez `any[]` par un type plus spécifique si possible
}

export const mockUserList: IUser[] = [
  // Ici, vous pouvez ajouter quelques utilisateurs mock pour initialiser la liste
  {
    userId: '1',
    username: 'johndoe',
    email: 'john.doe@example.com',
    password: 'hashed_password', // Remarque: le mot de passe doit être préalablement haché
    roles: ['user'],
    tutorialGroupType: 'S',
    teachingUnits: [] // Ajoutez des données réelles correspondant à la structure de vos unités d'enseignement
  },
  // ... autres utilisateurs mock ...
];

// N'oubliez pas de remplacer `any[]` par un type plus spécifique pour `teachingUnits`
// si vous avez un modèle ou une interface définie pour cela.
