const router = require("express").Router();
const Workout = require("../models/workout.js");
const db = require("../models");

router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post("/api/workouts", (req, res) => {
  db.Workout.create({type: "workout"})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  const id = req.params.id;
  db.Workout.update(
      { _id: id },
      { 
          $set:{
              exercises: [ req.body ]
          }
      }
   ).then(data => {
       console.log(data);
       db.Workout.find({_id: id})
       .then(data => {
           res.json(data[0].exercises);
       })
       .catch(err => {
           res.json(err);
       });
   }).catch(err => {
       console.log(err);
   })
  })

  router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });


module.exports = router;