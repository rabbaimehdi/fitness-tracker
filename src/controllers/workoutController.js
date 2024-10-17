const Workout = require('../models/Workout');

exports.createWorkout = async (req, res) => {
  try {
    const workout = new Workout(req.body);
    await workout.save();
    res.status(201).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find();
    res.json(workouts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getWorkout = async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);
    res.json(workout);
  } catch (error) {
    res.status(404).json({ error: 'Workout not found' });
  }
};

exports.updateWorkout = async (req, res) => {
  try {
    const workout = await Workout.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteWorkout = async (req, res) => {
  try {
    await Workout.findByIdAndDelete(req.params.id);
    res.json({ message: 'Workout deleted successfully' });
  } catch (error) {
    res.status(404).json({ error: 'Workout not found' });
  }
};