import express from 'express';
import * as userControllers from '../controllers/userControllers.js';
// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcrypt';
// import { UserModel } from '../models/userModels.js';

const shiftWizardRouter = express.Router();

shiftWizardRouter.get('/users', userControllers.getUsers);
shiftWizardRouter.post('/register', userControllers.registerUser);
shiftWizardRouter.get('/login', userControllers.loginUser);
shiftWizardRouter.post('/logout', userControllers.logoutUser);

export { shiftWizardRouter };