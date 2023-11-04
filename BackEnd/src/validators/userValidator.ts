import Joi from 'joi';

// Définition des rôles possibles pour la validation
const roles = ['Admin', 'Professor', 'Visitor'];

// Définition des types de groupe de travaux dirigés
const tutorialGroupTypes = ['S', 'L', 'CrossDisciplinary'];

const userSchema = Joi.object({
  id: Joi.string().required(),
  lastName: Joi.string().required(),
  firstName: Joi.string().required(),
  password: Joi.string().min(4).max(20).required(),
  role: Joi.string().valid(...roles).required(),
  email: Joi.string().email().required(),
  phoneNumber: Joi.string().required(), // Vous pouvez ajouter des règles spécifiques pour la validation du numéro de téléphone
  tutorialGroupType: Joi.string().valid(...tutorialGroupTypes).optional(),
  // Supposons que vous ayez un validateur pour l'Unité d'Enseignement (TeachingUnit)
  teachingUnits: Joi.array().items(
    Joi.object({
      id: Joi.string().required(),
      name: Joi.string().required(),
      // Incluez d'autres champs si nécessaire
    })
  ).optional()
});

export const validateUser = (userData: any): { isValid: boolean; errors?: string[]; validatedData?: any } => {
  const validationResult = userSchema.validate(userData, { abortEarly: false });
  
  if (validationResult.error) {
    return {
      isValid: false,
      errors: validationResult.error.details.map((detail: Joi.ValidationErrorItem) => detail.message)
    };
  }

  return {
    isValid: true,
    validatedData: validationResult.value
  };
};

