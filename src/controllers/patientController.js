const Patient = require('../models/patientModel');
const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');

exports.createPatient = catchAsync(async (req, res, next) => {
  const newPatient = await Patient.create(req.body);

  res.status(201).json({
    status: 'success',
    data: { patient: newPatient },
  });
});

exports.getAllPatients = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Patient.find(), req.body)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const patients = await features.query;

  res.status(200).json({
    status: 'success',
    results: patients.length,
    data: { patients },
  });
});

exports.getPatient = catchAsync(async (req, res, next) => {
  const patient = await Patient.findById(req.params.id);

  res.status(200).json({
    status: 'success',
    data: { patient },
  });
});

exports.updatePatient = catchAsync(async (req, res, next) => {
  const updatedPatient = await Patient.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );

  res.status(200).json({
    status: 'success',
    data: { patient: updatedPatient },
  });
});

exports.deletePatient = catchAsync(async (req, res, next) => {
  const deletedPatient = await Patient.findByIdAndDelete(req.params.id);

  res.status(200).json({
    status: 'success',
    data: null,
  });
});
