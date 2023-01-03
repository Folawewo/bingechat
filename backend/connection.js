const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', false);
mongoose.connect(
  `mongodb+srv://$(process.env.DB_USER):$(process.env.DB_PASS)@cluster0.vhsqijh.mongodb.net/bingeTexts?retryWrites=true&w=majority`,
  () => {
    console.log('Databse Connected');
  }
);
