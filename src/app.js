require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const workoutRoutes = require('./routes/workoutRoutes');
const exerciseRoutes = require('./routes/exerciseRoutes');
const nutritionPlanRoutes = require('./routes/nutritionPlanRoutes');
const progressRoutes = require('./routes/progressRoutes');
const socialRoutes = require('./routes/socialRoutes');

const app = express();

mongoose.connect(process.env.MONGODB_URI).then((res) =>{
    console.log("MongoDB connected")
});


app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/workouts', workoutRoutes);
app.use('/exercises', exerciseRoutes);
app.use('/nutrition-plans', nutritionPlanRoutes);
app.use('/progress', progressRoutes);
app.use('/social', socialRoutes);

module.exports = app;