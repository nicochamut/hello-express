const fs = require("fs");

class Contenedor {
  constructor(fileName) {
    this.fileName = fileName;
  }

  async save(prod) {
    try {
      try {
        await fs.promises.readFile("./" + this.fileName);

        let data = await fs.promises.readFile("./" + this.fileName);
        data = await JSON.parse(data);

        prod.id = data.length + 1;
        data.push(prod);
        this.deleteAll();
        await fs.promises.writeFile(this.fileName, JSON.stringify(data));
      } catch (error) {
        prod.id = 1;
        const products = [];
        products.push(prod);
        await fs.promises.writeFile(
          "./" + this.fileName,
          JSON.stringify(products)
        );
      }

      return console.log(prod.id);
    } catch (error) {
      console.log(error);
    }
  }
  async getById(id) {
    try {
      let data = await fs.promises.readFile("./" + this.fileName);
      data = JSON.parse(data);
      const prod = data.filter((p) => p.id == id);

      if (prod.length > 0) {
        return console.log(prod);
      } else {
        return console.log(null);
      }
    } catch (error) {}
  }
  async getAll() {
    try {
      let data = await fs.promises.readFile("./" + this.fileName);
      data = await JSON.parse(data);

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteById(id) {
    try {
      let data = await fs.promises.readFile("./" + this.fileName);
      data = await JSON.parse(data);

      const newData = data.filter((prod) => prod.id != id);

      await fs.promises.writeFile(
        "./" + this.fileName,
        JSON.stringify(newData)
      );
      try {
        prog.length > 0 ? console.log(prog) : null;
      } catch (e) {
        console.log(null);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async deleteAll() {
    try {
      await fs.promises.writeFile("./" + this.fileName, "");
    } catch (error) {
      console.log(error);
    }
  }
}

const products = new Contenedor("productos.txt");

// test.save({ nombre: "picture", precio: "15", thumbnail: "hhhhhh" });
// test.getById(5);
//test.getAll();

// test.deleteById(2)

module.exports = products;
