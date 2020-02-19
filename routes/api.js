const express = require("express");
const router = express.Router();
const Workout = require("../models/workout");

router.get("/api/workouts", (req, res) => {
  Workout.find({}).then(workoutResults => {
    console.log(workoutResults);
    res.json(workoutResults);
  });
});

module.exports = router;
