var express = require("express");
var bodyParser = require("body-parser");
var app = express();
const categories=require('./api/categories');
const signup=require('./api/signup');
const login=require('./api/login');
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/inventory", { useUnifiedTopology: true, useNewUrlParser: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function (req, res) {
    try {
        res.status(200).send('Welcome to INVENTORY MANAGEMENT SYSTEM');
    } catch (e) {
        res.status(500).json(e);
    }
})

app.post('/signup',signup);
app.post('/login',login);

app.use('/categories',categories);

var server = app.listen(4000, function () {
    console.log("app running on port.", server.address().port);
})