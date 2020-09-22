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


module.exports = router;