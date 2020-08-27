var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var cors = require('cors');
const getusers=require('./api/getusers');
const signup=require('./api/signup');
const login=require('./api/login');
const categories=require('./api/categories');
const subcategories=require('./api/subcategories');
const products=require('./api/products');
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/inventory", { useUnifiedTopology: true, useNewUrlParser: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', function (req, res) {
    try {
        res.status(200).send('Welcome to INVENTORY MANAGEMENT SYSTEM');
    } catch (e) {
        res.status(500).json(e);
    }
})

app.post('/signup',signup);
app.post('/login',login);
app.get('/getusers',getusers);
app.use('/categories',categories);
app.use('/subcategories',subcategories);
app.use('/products',products);

var server = app.listen(4000, function () {
    console.log("app running on port.", server.address().port);
})