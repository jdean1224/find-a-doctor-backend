const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './src/config.env' });

const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PORT = 5920;
const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
