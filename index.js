const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const recipe = require('./routes/recipe')
require('dotenv').config();

// My middlewares | environments | db connection
const app = express()
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

app.use('/api',recipe)

app.get('/', (req, res) => {
  res.json({status:'Server is running perfectly'})
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})