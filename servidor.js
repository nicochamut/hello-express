
const express = require("express");
const app = express();
const products = require("./contenedor.js");


const server = app.listen(8080, () => {
  console.log(`server escuchando en puerto ${server.address().port}`);
});

server.on("error", (error) => {
  console.log(`epa, ${error}`);
});


app.get("/", (req, res) => {
  res.send(
    '<body style="background: black; display: flex; justify-content: center; align-items: center"> <h1 style="color: #23d997">"/productos" para ver todos los productos. <br> "/productosRandom" para ver uno al azar.</h1></body>'
  );
});
app.get("/productos", async (req, res) => {
  const p = await products.getAll();
  res.send(p);
});

app.get("/productosRandom", async (req, res) => {
  const p = await products.getAll();
  const numRandom = Math.floor(Math.random() * (3 - 0) + 0);
  res.send(p[numRandom]);
});


