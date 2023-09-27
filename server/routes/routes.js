import express from 'express';
import * as userControllers from '../controllers/userControllers.js';
import * as employeeControllers from '../controllers/employeeControllers.js';
import * as shiftControllers from '../controllers/shiftControllers.js';
// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcrypt';
// import { UserModel } from '../models/userModels.js';

const shiftWizardRouter = express.Router();

shiftWizardRouter.get('/users', userControllers.getUsers);
shiftWizardRouter.post('/register', userControllers.registerUser);
shiftWizardRouter.get('/login', userControllers.loginUser);
shiftWizardRouter.post('/logout', userControllers.logoutUser);

shiftWizardRouter.post('/employees', employeeControllers.createEmployee);
shiftWizardRouter.put('/employees/:employeeId', employeeControllers.editEmployee);
shiftWizardRouter.delete('/employees/:employeeId', employeeControllers.deleteEmployee);

shiftWizardRouter.post('/shifts', shiftControllers.createShiftForDay);
// shiftWizardRouter.put('/daily-shifts/:shiftId', shiftControllers.editDailyShifts);
// shiftWizardRouter.delete('/daily-shifts/:shiftId', shiftControllers.deleteDailyShifts);

// shiftWizardRouter.post('/daily-working-employees', shiftControllers.addDailyWorkingEmployees);
// shiftWizardRouter.delete('/daily-working-employees/:employeeId', shiftControllers.deleteDailyWorkingEmployees);

// shiftWizardRouter.post('/shifts', shiftControllers.generateShifts);
// shiftWizardRouter.get('/shifts', shiftControllers.getShifts);
// shiftWizardRouter.put('/shifts/:shiftId', shiftControllers.editShifts);
// shiftWizardRouter.delete('/shifts/:shiftId', shiftControllers.deleteShifts);

export { shiftWizardRouter };