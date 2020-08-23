var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/inventory", { useUnifiedTopology: true, useNewUrlParser: true });
const User = require("../schema/userSchema");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const signup = (req, res) => {
    try {
        const { name, password } = req.body;
        if (!name || !password) {
            return res.status(200).send("Missing name or Password")
        }
        else {
            User.count({ name: name, password: password }, function (e, result) {
                if (e) {
                    res.status(500).send(e);
                }
                else {
                    if (result === 1) {
                        res.status(200).send('Signup Successfull');
                    }
                    else {
                        res.status(200).send("Invalid User");
                    }
                }
            });
        }
    }
    catch (error) {
        res.status(500).json(e);
    }
}

module.exports = signup;