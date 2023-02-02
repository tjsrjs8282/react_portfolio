const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const test = require("./Router/test");
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const MongoClient = require("mongodb").MongoClient;
let db;
const uri =
  "mongodb+srv://seongeon:tlqkfsha21@cluster0.20joh.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(uri, { useUnifiedTopology: true }, (err, client) => {
  if (err) return console.log("MongoDB 연결에 실패하였습니다.");
  db = client.db("reactapp");
  db.collection("post").insertOne({ name: "seongeon", age: 32 }, (err, res) => {
    console.log("저장완료");
  });
  app.listen(5000, () => {
    console.log("listening on 5000");
  });
});

// app.use("/api", test);

app.get("/api", (req, res) => {
  res.json([
    { name: "seong", age: 32 },
    { name: "test", age: 19 },
  ]);
});

app.use(express.static(path.join(__dirname, "../public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public"));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public"));
});

app.get("/get", (req, res) => {
  res.send("get 페이지 입니다dd.");
});

app.post("/add", (req, res) => {
  res.send("전송완료");
});

app.post("/text", (req, res) => {
  console.log(req.config.data);
  res.send("전송완료");
});

module.exports = app;
