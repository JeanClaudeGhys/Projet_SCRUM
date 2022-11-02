const express = require('express');
const app = express();

app.use(express.static("public"));

app.get("/", function(req, res) {
    res.render("index.ejs")
});

app.listen(3001);