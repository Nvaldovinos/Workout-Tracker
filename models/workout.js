const mongoose = require('mongoose');

const Schema = mongoose.Schema;

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

const Workout = mongoose.model('workout', workoutSchema);
module.exports = Workout;