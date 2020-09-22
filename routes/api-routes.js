const router = require("express").Router();
const Workout = require("../models/workout.js");
const db = require("../models");

// Get route
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.json(err);
    });
});



module.exports = router;