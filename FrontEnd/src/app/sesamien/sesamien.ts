export enum Mention {
    S = "S",
    L = "L"
}

export enum RegionOrigine {
    Fitovinany = "Fitovinany",
    AtsimoAndrefana = "Atsimo Andrefana",
    Analamanga = "Analamanga",
    Menabe = "Menabe",
    HauteMatsiatra = "Haute Matsiatra",
    Vakinankaratra = "Vakinankaratra",
    Boeny = "Boeny",
    SAVA = "SAVA",
    Tsiroanomandidy = "Tsiroanomandidy",
    Sofia = "Sofia",
    Ihorombe = "Ihorombe",
    Itasy = "Itasy",
    Antsinanana = "Antsinanana",
    AlaotraMangoro = "Alaotra Mangoro",
    Analanjirofo = "Analanjirofo",
    Vatovavy = "Vatovavy",
    AtsimoAtsinanana = "Atsimo Atsinanana",
    Melaky = "Melaky",
    DIANA = "DIANA",
    Anosy = "Anosy",
    Bongolava = "Bongolava",
    AmoronMania = "Amoron'i Mania",
    ANOSY = "ANÔSY",
    BETSIBOKA = "BETSIBOKA"
}

export enum Genre {
    M = "M",
    F = "F"
}

export class Sesamien {
    id: number;
    nom: string; // Nom de l'étudiant
    prenoms: string; // Prénoms de l'étudiant
    prenomUsuel: string; // Prénom usuel
    mention: Mention; // Sériation (S ou L)
    age: number; // Age de l'étudiant
    promotion: number; // Promotion (par exemple, "P24")
    image: string; // Image de profil
    regionOrigine: RegionOrigine; // Région d'origine
    genre: Genre; // Genre (M ou F)
    classement: number; // Classement de l'étudiant
    moyenneGeneraleCC: number; // Moyenne générale des contrôles continus
    moyenneGeneraleCT: number; // Moyenne générale des contrôles terminaux
    moyenneGenerale: number; // Moyenne générale (CC et CT)
    
    notes: {
        nomUE: string; // Nom de l'UE
        codeUE: string; // Code de l'UE
        ec: string[]; // Liste des EC
        noteCC: number; // Note de contrôle continu
        noteCT: number; // Note de contrôle terminal
    }[];

    constructor(
        nom: string = 'Entrer un nom ...',
        prenoms: string = 'Entrer des prénoms ...',
        prenomUsuel: string = '',
        mention: Mention = Mention.S,
        age: number = 0,
        promotion: number = 24,
        image: string = '',
        regionOrigine: RegionOrigine = RegionOrigine.Fitovinany,
        genre: Genre = Genre.M,
        classement: number = 0,
        moyenneGeneraleCC: number = 0,
        moyenneGeneraleCT: number = 0,
        moyenneGenerale: number = 0,
        notes: any[] = [] // Tableau des notes des UE
    ) {
        this.nom = nom;
        this.prenoms = prenoms;
        this.prenomUsuel = prenomUsuel;
        this.mention = mention;
        this.age = age;
        this.promotion = promotion;
        this.image = image;
        this.regionOrigine = regionOrigine;
        this.genre = genre;
        this.classement = classement;
        this.moyenneGeneraleCC = moyenneGeneraleCC;
        this.moyenneGeneraleCT = moyenneGeneraleCT;
        this.moyenneGenerale = moyenneGenerale;
        this.notes = notes;
    }
}
