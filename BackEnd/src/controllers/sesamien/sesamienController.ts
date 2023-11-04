import { SESAMIENS } from "../../mock/mock-sesamien-list";
import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import crypto from 'crypto';
import { validateSesamien } from '../../validators/sesamienValidator';

export const getSesamiens = (req: Request, res: Response) => {
    try {
    console.log('Route /api/sesamiens atteinte.');
    res.send(SESAMIENS);
    }
    catch (error) {
        console.error('Erreur lors de la récupération des sesamiens:', error);
        res.status(500).send('Erreur lors de la récupération des sesamiens.');
    }
};

export const getSesamienById = (req: Request, res: Response) => {
    const sesamienId = String(req.params.sesamienId);
    const sesamien = SESAMIENS.find((sesamien) => String(sesamien.id) === sesamienId);
    res.send(sesamien);
};

export const updateSesamien = (req: Request, res: Response) => {
    const sesamienId = String(req.params.sesamienId);
    console.log("ID du Sesamien à mettre à jour:", sesamienId);
    const updatedSesamien = req.body;

    const sesamien = SESAMIENS.find(sesamien => String(sesamien.id) === sesamienId);

    if (!sesamien) {
        return res.status(404).json({ message: "Sesamien non trouvé" });
    }

    const allowedUpdates = ["nom", "prenoms", "prenomUsuel"]; // Liste des champs que vous souhaitez autoriser à être mis à jour

// Supprimez toutes les clés de updatedSesamien qui ne sont pas dans allowedUpdates
Object.keys(updatedSesamien).forEach(key => {
    if (!allowedUpdates.includes(key)) {
        delete updatedSesamien[key];
    }
});

    Object.assign(sesamien, updatedSesamien); // Cette ligne copie toutes les propriétés d'updatedSesamien vers sesamien

    console.log("Données envoyées dans la requête PUT : ", updatedSesamien);

    res.json(sesamien);
};


export const createSesamien = (req: Request, res: Response) => {
    console.log('Corps de la requête reçue:', req.body);
    console.log("Route POST /api/sesamiens appelée");

    const validationResult = validateSesamien(req.body);

    if (validationResult.error) {
        console.error('Erreur lors de la validation du Sesamien:', validationResult.error.details[0].message);
        return res.status(400).json({ error: validationResult.error.details[0].message });
    }

    const newSesamien = req.body;

    const newSesamienId = uuidv4();
    const shortId = crypto.createHash('sha1').update(newSesamienId).digest('hex').substr(0, 8);

    const sesamien = {
        id: shortId,
        ...newSesamien, // Cela copie toutes les propriétés de newSesamien à l'objet sesamien
        notes: newSesamien.notes || [],
    };

    console.log("Ajout du Sesamien: ", sesamien);
    SESAMIENS.push(sesamien);
    console.log("Sesamiens après ajout: ", SESAMIENS);

    res.status(201).json(sesamien);
};