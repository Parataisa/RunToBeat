import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Test from './models/test.js';

dotenv.config();

const app = express();
app.use(express.json());

app.post('/api/tests', async (req, res) => {
    const tests = req.body;
    if (!tests.name || !tests.age) {
        return res.status(400).json({ message: 'Name and age are required' });
    }
    const test = new Test(tests);
    try {
        await test.save();
        res.status(201).json(test);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
    connectDB();
});

