import { Injectable } from '@angular/core';
import { User } from './user';
import { UUID} from 'angular2-uuid';
import { Observable, of, throwError } from 'rxjs';
import { __values } from 'tslib';


const ERRORS = {
  USER_NOT_DEFINED: "User is not defined",
  ROLE_NOT_ALLOWED: "User does not have the required role",
  // ... d'autres erreurs
};

@Injectable({
  providedIn: 'root'
})

export class AuthentificationService {

  
  private isAuthenticated = false;

  users: User[] = []

  authenticatedUser : User | undefined;

  constructor() { 
    this.users.push({
      userId: UUID.UUID(),
      username: 'Admin',
      email: '',
      password: '1234',
      roles: ["Professor", "Admin"],
      validateEmail: function (): boolean {
        throw new Error('Function not implemented.');
      }
    });
    this.users.push({
      userId: UUID.UUID(),
      username: 'User',
      email: '',
      password: '1234',
      roles: ["Professor"],
      validateEmail: function (): boolean {
        throw new Error('Function not implemented.');
      }
    })
  }

  public login(username:string, password: string):Observable<User>{
    let user = this.users.find(u => u.username==username);
    if (!user) return throwError(()=> new Error("User  not found"));
    if(user.password !== password){
      return throwError(()=>new Error("Bad crudentials"));
    }
    this.isAuthenticated = true;
    this.authenticatedUser= user;
    localStorage.setItem("authUser", JSON.stringify({username: user.username, roles : user.roles, jwt: "JWT_TOKEN"  }))
    return of (user); 
   }

  public authenticateUser (user: User):Observable<boolean> {
    if (!user) {
      // Condition pour générer une erreur si l'utilisateur n'est pas défini
      return throwError(() => new Error(ERRORS.USER_NOT_DEFINED));
    }
    if (!this.hasRequiredRole(user)) {
      // Autre condition de validation, renvoie une erreur si elle n'est pas remplie
      return throwError(() => new Error(ERRORS.ROLE_NOT_ALLOWED));
    }
    this.authenticatedUser= user;
    localStorage.setItem("authUser", JSON.stringify({username: user.username, roles : user.roles, jwt: "JWT_TOKEN"  }))
    return of (true);
  }

  public hasRole(role: string): boolean {
    return !!this.authenticatedUser && this.authenticatedUser.roles.includes(role);
  }

  public isUserAuthenticated():boolean{
    return this.isAuthenticated;
  }

  private hasRequiredRole(user: User): boolean {
     // Liste des rôles requis pour l'utilisateur
     const requiredRoles: string[] = ['Admin', 'Professor']; // Exemple de rôles requis
     return user.roles && user.roles.some((role:string) => requiredRoles.includes(role));
  }

  public logout(): void {
    this.authenticatedUser = undefined;
    this.isAuthenticated = false;
    localStorage.removeItem("authUser");
  }

  
}


