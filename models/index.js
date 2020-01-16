const mongoose = require('mongoose');
const Student = require('./students.js');

//comment 
const uri = process.env.DATABASE_URL || 'mongodb://localhost:27017/stu'; 

//comment 
const connectDb = () => {
  return mongoose.connect(uri, {useFindAndModify: false});
};

//comment 
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', true);
mongoose.set('useCreateIndex', true);

module.exports = {
  connectDb,
  models: {
    Student
  }
};