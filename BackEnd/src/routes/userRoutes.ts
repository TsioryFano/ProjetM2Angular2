import express from 'express';
import * as userController from '../controllers/user/userController';

const router = express.Router();

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
// Ajoutez d'autres routes pour POST, PUT, DELETE selon vos besoins

export default router;