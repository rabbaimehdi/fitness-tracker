const User = require('../models/User');
const Workout = require('../models/Workout'); // Add this line

exports.follow = async (req, res) => {
  try {
    const { followerId, followingId } = req.body;

    // Find the follower and following users
    const follower = await User.findById(followerId);
    const following = await User.findById(followingId);

    if (!follower || !following) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Add followingId to follower's following list and followerId to following's followers list
    if (!follower.following.includes(followingId)) {
      follower.following.push(followingId);
      await follower.save();
    }

    if (!following.followers.includes(followerId)) {
      following.followers.push(followerId);
      await following.save();
    }

    res.json({ message: 'Followed successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getFollowers = async (req, res) => {
  try {
    const userId = req.query.userId;
    const user = await User.findById(userId).populate('followers', 'username email');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user.followers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getFollowing = async (req, res) => {
  try {
    const userId = req.query.userId;
    const user = await User.findById(userId).populate('following', 'username email');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user.following);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getActivityFeed = async (req, res) => {
  try {
    const userId = req.query.userId;
    const user = await User.findById(userId).populate('following', 'username email');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const followingUsers = user.following.map(followingUser => followingUser._id);

    const workouts = await Workout.find({ userId: { $in: followingUsers } }).populate('userId', 'username email');

    res.json(workouts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};