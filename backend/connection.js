const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URL = process.env.MONGO_URL;

mongoose.set('strictQuery', false);
mongoose.connect(MONGO_URL, () => {
  console.log('Database Connected');
});
