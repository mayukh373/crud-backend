const mongoose = require("mongoose");
const express = require("express");
const studentRoute = require("./controller/studentRoute");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

mongoose.set("strictQuery", true);
mongoose.connect("mongodb+srv://test:12345@cluster0.ubfczuf.mongodb.net/schooldb");
var db = mongoose.connection;
db.on("open", () => {
    console.log("Connection to DB");
})
db.on("error", () => {
    console.log("Error");
})    

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use("/studentRoute",studentRoute);

app.listen(4000, () => {
    console.log("Server connected to 4000");
})