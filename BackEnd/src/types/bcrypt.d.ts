declare module 'bcrypt' {
    export function hash(data: any, saltOrRounds: string | number): Promise<string>;
    export function compare(data: any, encrypted: string): Promise<boolean>;
    // Ajoutez d'autres méthodes que vous utilisez ici
  }