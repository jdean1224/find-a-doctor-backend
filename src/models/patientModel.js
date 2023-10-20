const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  condition: {
    type: String,
    enum: ['sick', 'surgery', 'cancer'],
  },
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
