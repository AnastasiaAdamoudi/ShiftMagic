import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { shiftWizardRouter } from './routes/userRoutes.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT;
const mongoUri = process.env.MONGO_URI;

app.use(express.json());
app.use(cors());

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "employees"
  })
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB Atlas:', error);
});

app.use('/auth', shiftWizardRouter);
app.use('/auth/users', shiftWizardRouter);
app.use('/auth/register', shiftWizardRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});