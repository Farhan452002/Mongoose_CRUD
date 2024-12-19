const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');


const fruitSchema = new Mongoose.Schema({
    name: {
        type: string,
        required: true
    },
    color: {
        type: string,
        required: true
    },
    readyToEat: boolean
});

const Fruit = mongoose.model('Fruit',fruitSchema);

module.exports = Fruit;