import express from "express";
import cors from "cors";
import { SESAMIENS } from "./mock-sesamien-list";
import bodyParser from "body-parser";
import {v4 as uuidv4} from "uuid";


const app = express();
app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"]
}));


app.use(bodyParser.json());

app.get("/api/sesamiens", (req, res) => {
    res.send(SESAMIENS);
})

app.get("/api/sesamien/:sesamienId", (req, res) => {
    const sesamienId = req.params.sesamienId;
    const sesamien = SESAMIENS.find((sesamien) => sesamien.id === sesamienId);
    res.send(sesamien);
})

app.put("/api/sesamien/:sesamienId", (req, res) => {
    const sesamienId = req.params.sesamienId;
    const updatedSesamien = req.body; // Le corps de la requête contient les données mises à jour

    // Recherchez le sesamien par son ID dans votre tableau SESAMIENS (ou dans votre base de données)
    const sesamien = SESAMIENS.find((sesamien) => sesamien.id === sesamienId);

    if (!sesamien) {
        return res.status(404).json({ message: "Sesamien non trouvé" });
    }
    // Mettez à jour les données du sesamien avec les nouvelles données fournies
    sesamien.nom = updatedSesamien.nom;
    sesamien.prenoms = updatedSesamien.prenoms;
    sesamien.prenomUsuel = updatedSesamien.prenomUsuel;
    sesamien.mention = updatedSesamien.mention;
    sesamien.age = updatedSesamien.age;
    sesamien.promotion = updatedSesamien.promotion;
    sesamien.image = updatedSesamien.image;
    sesamien.regionOrigine = updatedSesamien.regionOrigine;
    sesamien.genre = updatedSesamien.genre;
    sesamien.classement = updatedSesamien.classement;
    sesamien.moyenneGeneraleCC = updatedSesamien.moyenneGeneraleCC;
    sesamien.moyenneGeneraleCT = updatedSesamien.moyenneGeneraleCT;
    sesamien.moyenneGenerale = updatedSesamien.moyenneGenerale;
    sesamien.notes = updatedSesamien.notes;

    console.log("Données envoyées dans la requête PUT : ", updatedSesamien);

    // Après la mise à jour, renvoyez le sesamien mis à jour
    res.json(sesamien);
});

const crypto = require('crypto');

app.post("/api/sesamiens", (req, res) => {
    const newSesamien = req.body;
  
    // Générez un nouvel identifiant unique pour le nouveau sésamien en utilisant uuid
 const newSesamienId = uuidv4();

 const shortId = crypto.createHash('sha1').update(newSesamienId).digest('hex').substr(0, 8);
  
  
    // Créez le nouvel sésamien avec l'identifiant généré
    const sesamien = {
        id: shortId,
        nom: newSesamien.nom,
        prenoms: newSesamien.prenoms,
        prenomUsuel: newSesamien.prenomUsuel,
        mention: newSesamien.mention,
        age: newSesamien.age,
        promotion: newSesamien.promotion,
        image: newSesamien.image,
        regionOrigine: newSesamien.regionOrigine,
        genre: newSesamien.genre,
        classement: newSesamien.classement,
        moyenneGeneraleCC: newSesamien.moyenneGeneraleCC,
        moyenneGeneraleCT: newSesamien.moyenneGeneraleCT,
        moyenneGenerale: newSesamien.moyenneGenerale,
        notes: newSesamien.notes || [],
    };
  
    // Ajoutez le nouvel sésamien au tableau SESAMIENS (ou insérez-le dans votre base de données)
    SESAMIENS.push(sesamien);
  
    // Retournez le nouvel sésamien dans la réponse
    res.status(201).json(sesamien);
  });
  

const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})