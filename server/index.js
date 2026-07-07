import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

const app =express();
app.use(cors());
dotenv.config();

connectDB();

const PORT= process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT} 🚀`);
})