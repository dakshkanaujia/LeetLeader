const express = require("express");
const cors = require("cors");
require('dotenv').config()
require("./config/dbconfig");
const userRoutes = require("./routes/Router");
const PORT = process.env.PORT;
const cron = require('node-cron');
const cronjobs = require('./Utils/Jobs/cronjob');


const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/users', userRoutes);

cronjobs.updateHourly();

app.listen(PORT, () => {
  console.log("Server sarted at port "+ PORT);
});

// cron.schedule('* * * * *', () => {
//   cronjobs.updateHourly();
// });


