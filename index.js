require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000

const conn = require('./config/db');
conn();

const Fruit = require('./models/fruit');
const starterFruits = require('./config/seed');
const fruitRoutes = require('./routes/fruitRoutes');

app.use(express.json())
app.use('/api/fruits',fruitRoutes);

// Home Route
app.get('/', (req, res)=>{
    res.send('Home Page!')
})

// Seed Route = populate our db w/ starter data
app.get('/fruits/seed',async (req,res)=>{
    try{
        await Fruit.deleteMany({});
        await Fruit.create(starterFruits);
        res.json(starterFruits);
    }
    catch (error){
        console.log("Error Loading Seed Data : "+error.message);
    }
});

app.listen(port,()=>{
    console.log(`Server is running on Port: ${port}`);
});