import express from "express";
import cors from "cors";
import { SESAMIENS } from "./mock-sesamien-list";
import bodyParser from "body-parser";


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

    // Après la mise à jour, renvoyez le sesamien mis à jour
    res.json(sesamien);
});

const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})