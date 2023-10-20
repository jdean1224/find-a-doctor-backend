const express = require('express');
const patientController = require('../controllers/patientController');
const patientRouter = express.Router();

patientRouter
  .route('/')
  .get(patientController.getAllPatients)
  .post(patientController.createPatient);

patientRouter
  .route('/:id')
  .get(patientController.getPatient)
  .patch(patientController.updatePatient)
  .delete(patientController.deletePatient);

module.exports = patientRouter;
