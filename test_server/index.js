var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors);

let value = "lala";
app.get("/", (req, res) => {
  console.log("lala");
  res.send(value);
});

app.post("/", (req, res) => {
  console.log(req.body);
  value = req.body;
  res.send("ok");
});
console.log("lalal");

app.listen(port, () => console.log("app started"));
