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
    const sesamien = SESAMIENS.find(sesamien => sesamien.id == sesamienId);
    res.send(sesamien);
})

app.put("/api/sesamien/:sesamienId", (req, res) => {
    const sesamienId = req.params.sesamienId;
    const updatedSesamien = req.body; // Le corps de la requête contient les données mises à jour

    // Recherchez le sesamien par son ID dans votre tableau SESAMIENS (ou dans votre base de données)
    const sesamien = SESAMIENS.find(sesamien => sesamien.id == sesamienId);

    if (!sesamien) {
        return res.status(404).json({ message: "Sesamien non trouvé" });
    }
    // Mettez à jour les données du sesamien avec les nouvelles données fournies
    sesamien.name = updatedSesamien.name; 
    sesamien.hp = updatedSesamien.hp;
    sesamien.cp = updatedSesamien.cp;
    sesamien.picture = updatedSesamien.picture;
    sesamien.mentions = updatedSesamien.mentions;

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
      name: newSesamien.name,
      hp: newSesamien.hp,
      cp: newSesamien.cp,
      picture: newSesamien.picture,
      mentions: newSesamien.mentions || [], // Assurez-vous que mentions est un tableau
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