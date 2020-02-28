const express = require("express");
const router = express.Router();
const Workout = require("../models/workout");

router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then(workoutResults => {
      console.log(workoutResults);
      res.json(workoutResults);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true, runValidators: true }
  )
    .then(workoutResults => {
      res.json(workoutResults);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workout.find()
    .then(workoutResults => {
      res.json(workoutResults);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .limit(7)
    .then(workoutResults => {
      console.log(workoutResults);
      res.json(workoutResults);
    })
    .catch(err => {
      res.json(err);
    });
});
module.exports = router;
