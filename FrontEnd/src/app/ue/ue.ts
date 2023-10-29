export enum Mention {
    S = 'S',
    L = 'L',
    Transversal = 'Transversal'
  }
  
  export enum Semestre {
    S1 = 'S1',
    S2 = 'S2'
  }
  
  export class UE {
    code: string;  // Code de l'UE
    mention: Mention;  // Mention de l'UE
    nom: string;  // Nom de l'UE
    semestre: Semestre;  // Semestre d'Application
    idEc: number[];  // Liste des ID_EC (clé étrangère)
    moyenneCC: number;  // Moyenne Générale des Contrôles Continus des EC qui la constituent
    moyenneCT: number;  // Moyenne Générale des Contrôles Terminaux des EC qui la constituent
    moyenneGenerale: number;  // Moyenne Générale de l'UE
    classementSesamiens: { [sesamienId: string]: number };  // Classement des sésamiens sur l'UE (clé: ID du sésamien, valeur: position/rang)
  }
  