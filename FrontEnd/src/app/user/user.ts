export class User {
    userId: string;
    username: string;
    email: string;
    password: string;
    roles: string [];
  
    constructor(userId: string, username: string, email: string, password: string, roles: string[]) {
      this.userId = userId;
      this.username = username;
      this.email = email;
      this.password = password; // Dans un vrai scénario, le mot de passe devrait être hashé
      this.roles = roles;
    }
  
    // Vous pourriez inclure des méthodes ici
    validateEmail(): boolean {
      // Valider l'email
      return /\S+@\S+\.\S+/.test(this.email);
    }
  
    // D'autres méthodes utiles pour un utilisateur peuvent être ajoutées ici
  }