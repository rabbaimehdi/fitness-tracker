const Progress = require('../models/Progress');

exports.createProgress = async (req, res) => {
  try {
    const progress = new Progress(req.body);
    await progress.save();
    res.status(201).json(progress);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getProgresses = async (req, res) => {
  try {
    const progresses = await Progress.find();
    res.json(progresses);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getProgress = async (req, res) => {
  try {
    const progress = await Progress.findById(req.params.id);
    res.json(progress);
  } catch (error) {
    res.status(404).json({ error: 'Progress not found' });
  }
};

exports.updateProgress = async (req, res) => {
  try {
    const progress = await Progress.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(progress);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteProgress = async (req, res) => {
  try {
    await Progress.findByIdAndDelete(req.params.id);
    res.json({ message: 'Progress deleted successfully' });
  } catch (error) {
    res.status(404).json({ error: 'Progress not found' });
  }
};