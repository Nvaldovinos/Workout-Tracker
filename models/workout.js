const mongoose = require('mongoose');

const Schema = mongoose.Scheema;

const workoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: String,
        trim: true,
        required: 'Please select your exercise'
        

    }]

})