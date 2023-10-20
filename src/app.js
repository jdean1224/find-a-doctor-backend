const express = require('express');
const app = express();
const cors = require('cors');
const patientRouter = require('../src/routes/patientRoutes');
const doctorRouter = require('../src/routes/doctorRoutes');

app.use(express.json());
app.use(cors());

app.use('/api/v1/patients', patientRouter);
app.use('/api/v1/doctors', doctorRouter);

module.exports = app;
