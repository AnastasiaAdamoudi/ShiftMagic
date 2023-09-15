import userModel from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import Joi from 'joi';


// Get all users
export async function getUsers(req, res) {
    try {
        const users = await userModel.find();
        
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Register a new user
export async function registerUser(req, res) {
    const userSchema = Joi.object({
        username: Joi.string().required().min(3),
        password: Joi.string().required().min(8)
    });

    const { error } = userSchema.validate(req.body); // Validate the user input against the schema, if there is an error, return the error

    const { username, password } = req.body;
    const user = await userModel.findOne({ username: username });
    
    if (user) {
        res.status(400).json({ message: 'User already exists' });
    } else {
        const salt = await bcrypt.genSalt(); // Generate a salt which is a random string of characters to be added to the password before hashing
        const hashedPassword = await bcrypt.hash(password, salt); // Hash the password with the salt added to it

        const newUser = new userModel({
            username: username,
            password: hashedPassword
        });

        await newUser.save();

        res.status(201).json(newUser);
    }
}

// Login a user
export async function loginUser(req, res) {
    const userSchema = Joi.object({
        username: Joi.string().required().min(3),
        password: Joi.string().required().min(8)
    });

    const { error } = userSchema.validate(req.body);

    const { username, password } = req.body;

    const user = await userModel.findOne({ username: username });

    if (!user) {
        return res.status(400).json({ message: 'User does not exist' });
    } else {
        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(400).json({ message: 'Invalid password' });
        } else {
            const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);

            res.header('auth-token', token).status(200).json({ token: token, user: user.username });
        }
    }
}

// Logout a user
export async function logoutUser(req, res) {
    res.header('auth-token', '').status(200).json({ message: 'User logged out' });
}