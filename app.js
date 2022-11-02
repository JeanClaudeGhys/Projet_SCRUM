const express = require('express');
const app = express();

app.use(express.static("public"));

app.get("/index.ejs", function(req, res) {
    res.render("index.ejs")
});

app.get("/legite.ejs", function(req, res) {
    res.render("legite.ejs")
});

app.get("/studios.ejs", function(req, res) {
    res.render("studios.ejs")
});

app.get("/roulotte.ejs", function(req, res) {
    res.render("roulotte.ejs")
});

app.get("/kota.ejs", function(req, res) {
    res.render("kota.ejs")
});

app.listen(3001);