export class User {
    id: number;
    username: string;
    email: string;
    password: string;
  
    constructor(id: number, username: string, email: string, password: string) {
      this.id = id;
      this.username = username;
      this.email = email;
      this.password = password; // Dans un vrai scénario, le mot de passe devrait être hashé
    }
  
    // Vous pourriez inclure des méthodes ici
    validateEmail(): boolean {
      // Valider l'email
      return /\S+@\S+\.\S+/.test(this.email);
    }
  
    // D'autres méthodes utiles pour un utilisateur peuvent être ajoutées ici
  }