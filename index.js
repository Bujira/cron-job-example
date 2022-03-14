const cron = require("node-cron");
const express = require("express");

app = express();

cron.schedule(
  "*/3 * * * * *",
  () => console.log("Executando a tarefa a cada 3 segundos!"));

app.listen(1313, () => console.log("Server is running..."));