const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
student: {
  email: String,
  name: String,
  address: {
    street: String,
    zipCode: String,
    city: String
  }
}
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student; 








