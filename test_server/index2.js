var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var app = express();
1;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

let value = "";
app.get("/", (req, res) => {
  console.log("get");

  res.send(value);
});

app.post("/", (req, res) => {
  console.log("post");

  value = req.body;
  res.send("lala");
});
app.listen(3000);
