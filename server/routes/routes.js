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

shiftWizardRouter.post('/employees', employeeControllers.createEmployee);
shiftWizardRouter.put('/employees/:employeeId', employeeControllers.editEmployee);
shiftWizardRouter.delete('/employees/:employeeId', employeeControllers.deleteEmployee);

shiftWizardRouter.post('/daily-shifts', shiftControllers.createDailyShifts);
shiftWizardRouter.put('/daily-shifts/:shiftId', shiftControllers.editDailyShifts);
shiftWizardRouter.delete('/daily-shifts/:shiftId', shiftControllers.deleteDailyShifts);

shiftWizardRouter.post('/weekly-working-employees', shiftControllers.addWeeklyWorkingEmployees);
shiftWizardRouter.delete('/weekly-working-employees/:employeeId', shiftControllers.deleteWeeklyWorkingEmployees);

shiftWizardRouter.post('/daily-working-employees', shiftControllers.addDailyWorkingEmployees);
shiftWizardRouter.delete('/daily-working-employees/:employeeId', shiftControllers.deleteDailyWorkingEmployees);

export { shiftWizardRouter };