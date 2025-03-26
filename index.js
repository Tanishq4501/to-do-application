const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use('/api/auth',authRoutes);
app.use('/api/tasks',taskRoutes);