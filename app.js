const express = require('express');
const app = express();

//dossier public liens
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

app.get("/contact.ejs", function(req, res) {
    res.render("contact.ejs")
});

//traitement du formulaire
app.use(express.urlencoded({extended: true})); //parser (récupération des contenus des champs du formulaire)
app.post("/", (req, res) => {
    res.send("Votre nom = > " + req.body.name + "<br>" + " Votre Email = > " + req.body.email + "<br>" +
    " Votre téléphone = > " + req.body.telephone + "<br>" + " Le sujet => " + req.body.subject + "<br>" +
    " Commentaire => " + req.body.message)
});

app.listen(3001);