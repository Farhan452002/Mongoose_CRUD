const express = require('express');
const router = express.Router();
const Fruit = require('../models/fruit');

// Get all Fruits
router.get('/', async (req,res)=>{
    try{
        const allFruits= await Fruit.find({});
        res.json(allFruits);
    }
    catch(error){
        console.log("Error Getting the Fruits: "+error.message());
        res.status(500).json({error: error.message})
    }
});

// Create the Fruits
router.post('/', async (req,res)=>{
    try{
        const createdFruit= await Fruit.create(req.body);
        console.log("Created Fruit: "+createdFruit);
        res.json(createdFruit);
    }
    catch(error){
        console.log("Error Creating the Fruits: "+error.message());
        res.status(500).json({error: error.message})
    }
});

// Delete Route
router.delete("/:id", async (req, res) => {
    try {
      const deletedFruit = await Fruit.findByIdAndDelete(req.params.id);
      res.json(deletedFruit);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


module.exports = router;