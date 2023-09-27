import shiftModel from '../models/shiftModel.js';
import Joi from 'joi';
import mongoose from 'mongoose';

// Gets all shifts
export async function getShifts(req, res) {
    try {
        const shifts = await shiftModel.find();

        res.status(200).json(shifts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Create a new shift for each day of the week
export async function createShiftForDay(req, res) {
    const { dayOfWeek, startTime, endTime, numberOfHoursPerShift, numberOfEmployeesPerShift } = req.body;

    const shiftSchema = Joi.object({
        startTime: Joi.number().required(),
        endTime: Joi.number().required(),
        numberOfHoursPerShift: Joi.number().required(),
        numberOfEmployeesPerShift: Joi.number().required()
    });

    const { error } = shiftSchema.validate({ startTime, endTime, numberOfHoursPerShift, numberOfEmployeesPerShift });

    if (error) {
        return res.status(400).json({ message: 'Invalid input for shift' });
    }

    const existingShift = await shiftModel.findOne({
        dayOfWeek,
        startTime,
        endTime
    });
    

    if (existingShift) {
        return res.status(400).json({ message: 'This shift for this day already exists' });
    }

    const newShift = new shiftModel({
        dayOfWeek,
        startTime,
        endTime,
        numberOfHoursPerShift,
        numberOfEmployeesPerShift
    });

    await newShift.save();

    res.status(201).json(newShift);
}

