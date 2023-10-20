const express = require('express');
const doctorController = require('../controllers/doctorController');
const doctorRouter = express.Router();

doctorRouter
  .route('/')
  .get(doctorController.getAllDoctors)
  .post(doctorController.createDoctor);

doctorRouter
  .route('/:id')
  .get(doctorController.getDoctor)
  .patch(doctorController.updateDoctor)
  .delete(doctorController.deleteDoctor);

module.exports = doctorRouter;
