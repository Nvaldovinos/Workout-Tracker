const router = require('express').Router();
const Workout = require('../models/workout.js')


//gets workout.js from public folder 
router.post('/api/workouts', (req, res) => {
   Workout.create({})
   .then(dbWorkout =>{
       res.json(dbWorkout)
   })
   .catch(err =>{
       res.status(400).json(err)
   });
});
  
//route to update existing workouts
router.put('/api/workouts/:id', (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, 
     //second parameter should give information to update workout   
        )
        .then(dbWorkout =>{
            res.json(dbWorkout)
        })
        .catch(err =>{
            res.status(400).json(err)
        });
});

//route to grab all the workouts and populate the dashboard
router.get('/api/workouts', (req, res) => {
    Workout.aggregate(
        //get total duration of the workouts.
    )
    .then(dbWorkout =>{
        res.json(dbWorkout)
    })
    .catch(err =>{
        res.status(400).json(err)
    });
})

//route to get the workouts within their range

//route to delete workouts. router.delete




module.exports = router;

