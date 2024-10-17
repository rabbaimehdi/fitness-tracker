const Exercise = require('../models/Exercise');

exports.createExercise = async (req, res) => {
  try {
    const exercise = new Exercise(req.body);
    await exercise.save();
    res.status(201).json(exercise);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.json(exercises);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getExercise = async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    res.json(exercise);
  } catch (error) {
    res.status(404).json({ error: 'Exercise not found' });
  }
};

exports.updateExercise = async (req, res) => {
  try {
    const exercise = await Exercise.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(exercise);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteExercise = async (req, res) => {
  try {
    await Exercise.findByIdAndDelete(req.params.id);
    res.json({ message: 'Exercise deleted successfully' });
  } catch (error) {
    res.status(404).json({ error: 'Exercise not found' });
  }
};