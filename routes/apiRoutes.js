const router = require('express').Router();
const Workouts = require('../models/workouts.js')

// route to grab all the workouts and populate the dashboard
// router.get('/api/workouts', (req, res) => {
//     Workouts.find({})
//     then(dbWorkout =>{
//         res.json(dbWorkout)
//     })
//     .catch(err =>{
//         res.status(400).json(err)
//     });
// });

//get total duration of the workouts.
router.get('/api/workouts', (req, res) => {
    Workouts.aggregate([{
        $addfields: {totalDuration: {$sum: 'exercises.duration'}}
    }])
    .then(resWorkouts =>{
        res.json(resWorkouts)
    })
    .catch(err =>{
        res.status(400).json(err)
    });
})


//route to get the workouts within their range
router.get('/api/workouts/range', (req, res) =>{
    Workouts.aggregate([
        {$addfields: {totalDuration: {$sum: '$exercises.duration'}}},
        {$sort: {'day': -1}},
        {$limit: (7)}
    ])
    .then(resWorkouts =>{
        res.json(resWorkouts)
    })
    .catch(err =>{
        res.status(400).json(err)
    });
});

//gets workout.js from public folder 
router.post('/api/workouts', (req, res) => {
   Workouts.create({})
   .then(resWorkouts =>{
       res.json(resWorkouts)
   })
   .catch(err =>{
       res.status(400).json(err)
   });
});
  
//route to update existing workouts
router.put('/api/workouts/:id', async (req, res) => {
    Workouts.findByIdAndUpdate({'_id': req.params.id},
    {$push: {'exercises': req.body}})
    .then(resWorkouts =>{
        res.json(resWorkouts)
    })
    .catch(err =>{
        res.status(400).json(err)
    });
});

//route to delete workouts. router.delete




module.exports = router;

