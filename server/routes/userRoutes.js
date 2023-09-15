import express from 'express';
import * as userControllers from '../controllers/userControllers.js';
// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcrypt';
// import { UserModel } from '../models/userModels.js';

const shiftWizardRouter = express.Router();

shiftWizardRouter.get('/users', userControllers.getUsers);
shiftWizardRouter.get('/login');
shiftWizardRouter.post('/register', userControllers.registerUser);
shiftWizardRouter.post('/logout');

export { shiftWizardRouter };