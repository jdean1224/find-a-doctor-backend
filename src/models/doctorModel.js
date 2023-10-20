const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  yearsExp: {
    type: Number,
    required: true,
  },
  field: {
    type: String,
    required: true,
    enum: ['general', 'surgeon', 'specialist'],
  },
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
