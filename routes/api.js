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

router.put("/api/workouts/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Workout.findByIdAndUpdate({ _id: id }, { $push: { exercises: body } })
    .then(workoutResults => {
      res.json(workoutResults);
      console.log(workoutResults);
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
