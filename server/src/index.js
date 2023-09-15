import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});