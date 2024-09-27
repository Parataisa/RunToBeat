import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './configs/db.js';
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);


app.listen(5000, () => {
    console.log('Server is running on port 5000');
    connectDB();
});
