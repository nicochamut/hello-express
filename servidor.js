const http = require("http");
const moment = require("moment");
const express = require("express");
const app = express();

const server = app.listen(8080, () => {
  console.log(`server escuchando en puerto ${server.address().port}`);
});

server.on("error", (error) => {
  console.log(`epa, ${error}`);
});

app.get("/", (req, res) => {
  res.send("<h1>Hello!</h1>");
});
