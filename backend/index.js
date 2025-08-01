 const notice = require('./routes/notice');
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cors  = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

const allowedOrigins = [
  'http://localhost:5173', // for local frontend dev
  'https://notice-theta.vercel.app'
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true, 
}));


app.use(express.json());


mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("MongoDB connection error:", err);
})

app.get('/',(req,res)=>{
    res.send('Ek-prayass Website is live');
})

app.use('/api/notices',notice)

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));