const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs")
app.set("views", "./view-html")


