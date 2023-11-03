import Joi from 'joi';

const sesamienSchema = Joi.object({
    nom: Joi.string().required(),
    prenoms: Joi.string().required(),
    prenomUsuel: Joi.string().optional(),
    mention: Joi.string().required(),
    age: Joi.number().integer().min(0).required(),
    promotion: Joi.number().integer().min(0).required(),
    image: Joi.string().optional(), // ou .uri() si c'est une URL
    regionOrigine: Joi.string().required(),
    genre: Joi.string().valid('M', 'F').required(), // remplacer par vos valeurs si elles sont différentes
    classement: Joi.number().integer().min(0).optional(),
    etat: Joi.string().optional(),
    moyenneGeneraleCC: Joi.number().required(),
    moyenneGeneraleCT: Joi.number().required(),
    moyenneGenerale: Joi.number().required(),
    notes: Joi.array().items(Joi.object({
        matiere: Joi.string().required(),
        note: Joi.number().required()
    })).optional()
});


export const validateSesamien = (data: any) => {
    const validationResult = sesamienSchema.validate(data, { abortEarly: false }); // ajout de l'option abortEarly: false

    if (validationResult.error) {
        console.error('Erreurs de validation:', validationResult.error.details); // imprimer les détails de l'erreur
    }

    return validationResult;
};
