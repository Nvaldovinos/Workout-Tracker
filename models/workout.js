const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        name: {
            type: String,
            trim: true,
            required: "Name of exercise",
        },
        type: {
            type: String,
            trim: true,
            required: 'What type of exercise',
        },
        weight: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        duration: {
            type: Number,
            trim: true,
            required: 'What was the duration of exercise'
        },
        //distance:{
        //     type: Number,
        // },

    }],

});

const Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout;
