const router = require('express').Router();
const Workout = require('../models/workout.js')

//route to grab all the workouts and populate the dashboard
router.get('/api/workouts', (req, res) => {
    Workout.find({})
    then(dbWorkout =>{
        res.json(dbWorkout)
    })
    .catch(err =>{
        res.status(400).json(err)
    });
});


// router.get('/api/workouts', (req, res) => {
//     Workout.aggregate(
//         //get total duration of the workouts.
//     )
//     .then(dbWorkout =>{
//         res.json(dbWorkout)
//     })
//     .catch(err =>{
//         res.status(400).json(err)
//     });
// })


//route to get the workouts within their range
router.get('/api/workouts/range', (req, res) =>{
    Workout.find({})
    then(dbWorkout =>{
        res.json(dbWorkout)
    })
    .catch(err =>{
        res.status(400).json(err)
    });
});

//gets workout.js from public folder 
router.post('/api/workouts', ({ body }, res) => {
   Workout.create(body)
   .then(dbWorkout =>{
       res.json(dbWorkout)
   })
   .catch(err =>{
       res.status(400).json(err)
   });
});
  
//route to update existing workouts
router.put('/api/workouts/:id', async (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, {
        $push: { exercises: req.body}
    })
        .then(dbWorkout =>{
            res.json(dbWorkout)
        })
        .catch(err =>{
            res.status(400).json(err)
        });
});

//route to delete workouts. router.delete




module.exports = router;

