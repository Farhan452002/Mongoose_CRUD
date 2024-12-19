require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000

const conn = require('./config/db');
conn();

// Home Route
app.get('/', (req, res)=>{
    res.send('Home Page!')
})

app.listen(port,()=>{
    console.log(`Server is running on Port: ${port}`);
});