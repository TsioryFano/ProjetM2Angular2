import { Sesamien, Mention, RegionOrigine, Genre, Etat} from "./sesamien";

export const SESAMIENS: Sesamien[] = [
    {
        id: "1",
        nom: "Nom1",
        prenoms: "Prénoms1",
        prenomUsuel: "PrénomUsuel1",
        mention: Mention.S,
        age: 20,
        promotion: 24,
        image: "imageEtudiant1",
        regionOrigine: RegionOrigine.Fitovinany,
        genre: Genre.M,
        classement: 1,
        moyenneGeneraleCC: 15.5,
        moyenneGeneraleCT: 13.7,
        moyenneGenerale: 14.6,
        etat: Etat.Actif,
        notes: [
            {   nomUE: "Activités Numériques", 
                codeUE: "MATHEMATS", 
                ec: ["Fonctions numériques", "Suites", "Statistiques"],
                noteCC: 14.5,
                noteCT: 15.0
            },
            {   nomUE: "Chimie",
                codeUE: "PHYSCHIMI", 
                ec: ["Chimie organique", "Chimie minérale", "Nucléaire"], 
                noteCC: 14.5,
                noteCT: 15.0
            },
            {   nomUE: "S'informer",
                codeUE: "CULTGENER", 
                ec: ["Sujets d'actualité", "Recherce documentaire", "Développement durable"], 
                noteCC: 14.5,
                noteCT: 15.0
            },
        ]
    },
    {
        id: "2",
        nom: "Nom2",
        prenoms: "Prénoms2",
        prenomUsuel: "PrénomUsuel2",
        mention: Mention.L,
        age: 21,
        promotion: 23,
        image: "imageEtudiant2",
        regionOrigine: RegionOrigine.AmoronMania,
        genre: Genre.F,
        classement: 3,
        moyenneGeneraleCC: 14.8,
        moyenneGeneraleCT: 12.9,
        moyenneGenerale: 13.8,
        etat: Etat.Actif,
        notes: [
            { 
                nomUE: "Français, Langue de l'enseignement supérieur",
                codeUE: "FRANCLESP",
                ec: ["Rédiger un résumé de texte", "Rédiger une note de synthèse"],
                noteCC: 14.5,
                noteCT: 15.0 
            },

        ]
    },
    {
        id: "3",
        nom: "Nom3",
        prenoms: "Prénoms3",
        prenomUsuel: "PrénomUsuel3",
        mention: Mention.S,
        age: 22,
        promotion: 22,
        image: "imageEtudiant3",
        regionOrigine: RegionOrigine.Analamanga,
        genre: Genre.M,
        classement: 5,
        moyenneGeneraleCC: 16.2,
        moyenneGeneraleCT: 14.5,
        moyenneGenerale: 15.4,
        etat: Etat.Actif,
        notes: [
            { 
                nomUE: "Mathématiques", 
                codeUE: "MATHS", 
                ec: ["Algèbre", "Analyse", "Géométrie"],
                noteCC: 14.5,
                noteCT: 15.0
            },
            { 
                nomUE: "Physique", 
                codeUE: "PHYSIQUE", 
                ec: ["Mécanique", "Électromagnétisme"],
                noteCC: 14.5,
                noteCT: 15.0
            },
        ]
    },

    {
        id: "4",
        nom: "Nom4",
        prenoms: "Prénoms4",
        prenomUsuel: "PrénomUsuel4",
        mention: Mention.L,
        age: 19,
        promotion: 25,
        image: "imageEtudiant4",
        regionOrigine: RegionOrigine.Analamanga,
        genre: Genre.F,
        classement: 2,
        moyenneGeneraleCC: 14.3,
        moyenneGeneraleCT: 13.2,
        moyenneGenerale: 13.7,
        etat: Etat.Actif,
        notes: [
            { 
                nomUE: "Philosophie", 
                codeUE: "PHILO", 
                ec: ["Métaphysique", "Éthique", "Logique"],
                noteCC: 14.5,
                noteCT: 15.0 
            },
            { 
                nomUE: "Histoire de l'Art", 
                codeUE: "HISTART", 
                ec: ["Renaissance", "Baroque", "Impressionnisme"],
                noteCC: 14.5,
                noteCT: 15.0
            },
            
        ]
    },
    {
        id: "5",
        nom: "Nom5",
        prenoms: "Prénoms5",
        prenomUsuel: "PrénomUsuel5",
        mention: Mention.S,
        age: 20,
        promotion: 24,
        image: "imageEtudiant5",
        regionOrigine: RegionOrigine.AtsimoAndrefana,
        genre: Genre.M,
        classement: 4,
        moyenneGeneraleCC: 15.1,
        moyenneGeneraleCT: 13.9,
        moyenneGenerale: 14.5,
        etat: Etat.Actif,
        notes: [
            { 
                nomUE: "Chimie", 
                codeUE: "CHIMIE", 
                ec: ["Chimie Organique", "Chimie Inorganique", "Chimie Analytique"],
                noteCC: 14.5,
                noteCT: 15.0
            },
            { 
                nomUE: "Biologie", 
                codeUE: "BIOLOGIE", 
                ec: ["Biologie Cellulaire", "Biologie Moléculaire", "Biologie Écologique"],
                noteCC: 14.5,
                noteCT: 15.0
            },
        ]
    },
    {
        id: "6",
        nom: "Nom6",
        prenoms: "Prénoms6",
        prenomUsuel: "PrénomUsuel6",
        mention: Mention.S,
        age: 23,
        promotion: 21,
        image: "imageEtudiant6",
        regionOrigine: RegionOrigine.HauteMatsiatra,
        genre: Genre.M,
        classement: 6,
        moyenneGeneraleCC: 15.0,
        moyenneGeneraleCT: 13.8,
        moyenneGenerale: 14.4,
        etat: Etat.Actif,
        notes: [
            { 
                nomUE: "Physiologie", 
                codeUE: "PHYSIOLOGIE",
                ec: ["Système Nerveux", "Système Digestif", "Système Cardiovasculaire"],
                noteCC: 14.5,
                noteCT: 15.0
            },
            { 
                nomUE: "Génétique", 
                codeUE: "GENETIQUE", 
                ec: ["Génétique Moléculaire", "Génétique des Populations", "Génétique Appliquée"],
                noteCC: 14.5,
                noteCT: 15.0
            },
        ]
    },
    {
        id:"7" ,
        nom: "Nom7",
        prenoms: "Prénoms7",
        prenomUsuel: "PrénomUsuel7",
        mention: Mention.L,
        age: 24,
        promotion: 20,
        image: "imageEtudiant7",
        regionOrigine: RegionOrigine.Menabe,
        genre: Genre.F,
        classement: 7,
        moyenneGeneraleCC: 14.7,
        moyenneGeneraleCT: 12.5,
        moyenneGenerale: 13.6,
        etat: Etat.Actif,
        notes: [
            { 
                nomUE: "Littérature", 
                codeUE: "LITT", 
                ec: ["Littérature Française", "Littérature Anglaise", "Littérature Comparée"],
                noteCC: 14.5,
                noteCT: 15.0 
            },
            { 
                nomUE: "Histoire de l'Art", 
                codeUE: "HISTART", 
                ec: ["Art Médiéval", "Art de la Renaissance", "Art Moderne"],
                noteCC: 14.5,
                noteCT: 15.0
            },
        ]
    },
    {
        id: "8",
        nom: "Nom8",
        prenoms: "Prénoms8",
        prenomUsuel: "PrénomUsuel8",
        mention: Mention.S,
        age: 22,
        promotion: 22,
        image: "imageEtudiant8",
        regionOrigine: RegionOrigine.Vakinankaratra,
        genre: Genre.F,
        classement: 8,
        moyenneGeneraleCC: 15.3,
        moyenneGeneraleCT: 13.9,
        moyenneGenerale: 14.6,
        etat: Etat.Actif,
        notes: [
            { 
                nomUE: "Informatique", 
                codeUE: "INFO", 
                ec: ["Programmation", "Base de Données", "Réseaux"],
                noteCC: 14.5,
                noteCT: 15.0
            },
            { 
                nomUE: "Anglais", 
                codeUE: "ANGLAIS", 
                ec: ["Anglais des Affaires", "Traduction", "Phonétique"],
                noteCC: 14.5,
                noteCT: 15.0
            },
        ]
    },
    {
        id: "9",
        nom: "Nom9",
        prenoms: "Prénoms9",
        prenomUsuel: "PrénomUsuel9",
        mention: Mention.L,
        age: 20,
        promotion: 24,
        image: "imageEtudiant9",
        regionOrigine: RegionOrigine.AtsimoAndrefana,
        genre: Genre.M,
        classement: 9,
        moyenneGeneraleCC: 14.9,
        moyenneGeneraleCT: 13.4,
        moyenneGenerale: 14.2,
        etat: Etat.Actif,
        notes: [
            { 
                nomUE: "Philosophie", 
                codeUE: "PHILO", 
                ec: ["Philosophie Antique", "Éthique", "Philosophie Politique"],
                noteCC: 14.5,
                noteCT: 15.0
            },
            { 
                nomUE: "Sciences Politiques",
                codeUE: "POLITIQUE",
                ec: ["Théorie Politique", "Relations Internationales", "Politiques Publiques"],
                noteCC: 14.5,
                noteCT: 15.0
            },
        ]
    },
    {
        id: "10",
        nom: "Nom10",
        prenoms: "Prénoms10",
        prenomUsuel: "PrénomUsuel10",
        mention: Mention.S,
        age: 21,
        promotion: 23,
        image: "imageEtudiant10",
        regionOrigine: RegionOrigine.Analamanga,
        genre: Genre.F,
        classement: 10,
        moyenneGeneraleCC: 15.7,
        moyenneGeneraleCT: 14.0,
        moyenneGenerale: 14.9,
        etat: Etat.Actif,
        notes: [
            { 
                nomUE: "Chimie", 
                codeUE: "CHIMIE", 
                ec: ["Chimie Organique", "Chimie Inorganique", "Chimie Analytique"],
                noteCC: 14.5,
                noteCT: 15.0
            },
            { 
                nomUE: "Biologie", 
                codeUE: "BIOLOGIE", 
                ec: ["Biologie Cellulaire", "Biologie Moléculaire", "Biologie Écologique"],
                noteCC: 14.5,
                noteCT: 15.0
            },
        ]
    }
];
