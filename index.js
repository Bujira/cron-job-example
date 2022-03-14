const cron = require("node-cron");
const express = require("express");

app = express();

cron.schedule(
  "*/3 * * * * *",
  () => console.log("Executing a task every 3 seconds!"));

app.listen(1313, () => console.log("Server is running..."));