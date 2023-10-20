const Doctor = require('../models/doctorModel');
const catchAsync = require('../utils/catchAsync');
const APIFeatures = require('../utils/apiFeatures');

exports.createDoctor = catchAsync(async (req, res, next) => {
  const newDoctor = await Doctor.create(req.body);

  res.status(201).json({
    status: 'success',
    data: { doctor: newDoctor },
  });
});

exports.getAllDoctors = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Doctor.find(), req.body)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const doctors = await features.query;

  res.status(200).json({
    status: 'success',
    results: doctors.length,
    data: { doctors },
  });
});

exports.getDoctor = catchAsync(async (req, res, next) => {
  const doctor = await Doctor.findById(req.params.id);

  res.status(200).json({
    status: 'success',
    data: { doctor },
  });
});

exports.updateDoctor = catchAsync(async (req, res, next) => {
  const updatedDoctor = await Doctor.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).json({
    status: 'success',
    data: { doctor: updatedDoctor },
  });
});

exports.deleteDoctor = catchAsync(async (req, res, next) => {
  const deletedDoctor = await Doctor.findByIdAndDelete(req.params.id);

  res.status(200).json({
    status: 'success',
    data: null,
  });
});
