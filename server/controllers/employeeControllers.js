import employeeModel from '../models/employeeModel.js';
import Joi from 'joi';

// Gets all employees
export async function getEmployees(req, res) {
    try {
        const employees = await employeeModel.find();

        res.status(200).json(employees);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Create a new employee
export async function createEmployee(req, res) {
    const employeeSchema = Joi.object({
        name: Joi.string().required().min(3),
        weeklyAvailability: Joi.array().required().min(7),
        weeklyHours: Joi.number().required().min(0),
        weeklyShifts: Joi.number().required().min(0)
    });

    const { error } = employeeSchema.validate(req.body);

    const { name, weeklyAvailability, weeklyHours, weeklyShifts } = req.body;
    const employee = await employeeModel.findOne({ name: name });

    if (employee) {
        res.status(400).json({ message: 'Employee already exists' });
    } else {
        const newEmployee = new employeeModel({
            name: name,
            weeklyAvailability: weeklyAvailability,
            weeklyHours: weeklyHours,
            weeklyShifts: weeklyShifts
        });

        await newEmployee.save();

        res.status(201).json(newEmployee);
    }
}

// Edit an employee
export async function editEmployee (req, res, id) {
    const employeeSchema = Joi.object({
        id: Joi.string().required(),
        weeklyAvailability: Joi.array().required().min(7),
        weeklyHours: Joi.number().required().min(0),
        weeklyShifts: Joi.number().required().min(0)
    });

    const { error } = employeeSchema.validate(req.body);
    const { id: _id } = req.params;
    const { weeklyAvailability, weeklyHours, weeklyShifts } = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('No employee with that id');
    } else {
        const editedEmployee = await employeeModel.findById(_id);
        if (!editedEmployee) {
            return res.status(404).send('No employee with that id');
        }

        editedEmployee.weeklyAvailability = weeklyAvailability;
        editedEmployee.weeklyHours = weeklyHours;
        editedEmployee.weeklyShifts = weeklyShifts;

        await editedEmployee.save();

        res.status(200).json(editedEmployee);
    }
}

// Delete an employee
export async function deleteEmployee(req, res, id) {
    const employeeSchema = Joi.object({
        id: Joi.string().required()
    });

    const { error } = employeeSchema.validate(req.params);
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('No employee with that id');
    } else {
        await employeeModel.findByIdAndRemove(_id);
        res.status(200).json({ message: 'Employee deleted successfully' });
    }
}

// Choose an employee to generate weekly shifts
export async function chooseEmployee(req, res, id) {
    const employeeSchema = Joi.object({
        id: Joi.string().required()
    });

    const { error } = employeeSchema.validate(req.params);
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('No employee with that id');
    } else {
        const employee = await employeeModel.findById(_id);
        if (!employee) {
            return res.status(404).send('No employee with that id');
        }

        employee.isChosen = true;

        await employee.save();

        res.status(200).json(employee);
    }
}