
export class User {
  userId: string;
  username: string;
  email: string;
  password: string; // Ceci devrait être un hash, pas le mot de passe en clair
  roles: string[];
  tutorialGroupType?: string;
  teachingUnits?: any[]; // Remplacez any par un type spécifique si vous avez une classe ou une interface pour les Unités d'Enseignement

  constructor(id: string, username: string, email: string, password: string, roles: string[], tutorialGroupType?: string, teachingUnits?: any[]) {
    this.userId = id;
    this.username = username;
    this.email = email;
    this.password = password; // Utilisez une fonction pour hasher le mot de passe
    this.roles = roles;
    this.tutorialGroupType = tutorialGroupType;
    this.teachingUnits = teachingUnits;
  }

  // Ajoutez ici vos méthodes pour valider l'email, etc.
}
