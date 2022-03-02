const http = require("http");
const moment = require("moment");
const express = require("express");
const app = express();
const products = require("./contenedor.js");

const server = app.listen(8080, () => {
  console.log(`server escuchando en puerto ${server.address().port}`);
});

server.on("error", (error) => {
  console.log(`epa, ${error}`);
});

app.get("/productos", async (req, res) => {
  const p = await products.getAll();
  console.log(p);
  res.send(p);
});

app.get("/productosRandom", async (req, res) => {
  const p = await products.getAll();
  const numRandom = Math.floor(Math.random() * (3 - 0) + 0);
  res.send(p[numRandom]);
});


