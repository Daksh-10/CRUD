const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
let books = [];

app.post("/create", (req, res) => {
  const { id, name, Price } = req.body;
  books.push({ id: id, name: name, Price: Price });
  res.status(200).send({ message: "Book Added Successfully" });
});

app.get("/read", (req, res) => {
  res.status(200).send(books);
});

app.put("/update/:id", (req, res) => {
  const ID = req.params.id; //as 'id' is a parameter
  console.log(ID);
  const updatedItem = req.body;
  const index = books.findIndex((item) => item.id === ID);
  if (index !== -1) {
    books[index] = updatedItem;
  }
  console.log(books);
  res
    .status(200)
    .send({ message: `Item with ID: ${ID}, updated successfully` });
});

app.delete("/delete/:id", (req, res) => {
  const ID = req.params.id;
  const itemIndex = books.findIndex((item) => item.id === ID);

  if (itemIndex !== -1) {
    books.splice(itemIndex, 1);
    res.status(200).json({ message: "Item deleted successfully" });
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
