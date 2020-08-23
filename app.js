var express = require("express");
var bodyParser = require("body-parser");
var app = express();
const signup=require('./api/signup');
const login=require('./api/login');

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

var server = app.listen(4000, function () {
    console.log("app running on port.", server.address().port);
})