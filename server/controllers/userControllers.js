import userModel from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import Joi from 'joi';

export async function getUsers(req, res) {
    try {
        const users = await userModel.find();
        
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export async function registerUser(req, res) {
    const userSchema = Joi.object({
        username: Joi.string().required().min(3),
        password: Joi.string().required().min(8)
    });

    const { error } = userSchema.validate(req.body);

    const { username, password } = req.body;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
        username: username,
        password: hashedPassword
    });

    await newUser.save();

    res.status(201).json(newUser);
}