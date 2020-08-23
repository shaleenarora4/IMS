var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var mongoose = require("mongoose");
var jwt = require('jsonwebtoken');
mongoose.connect("mongodb://localhost:27017/inventory", { useUnifiedTopology: true, useNewUrlParser: true });
const User = require("../schema/userSchema");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const jwtKey = "my_secret_key";
const jwtExpirySeconds = 9000;

const login= (req, res) => {
    try {
        const { name, password } = req.body;
        if (!name || !password) {
            return res.status(200).send("Missing name or Password")
        }
        else {
            User.count({ name: name, password: password }, function (error, result) {
                if (error) {
                    res.status(500).json(e)
                }
                else {
                    if (result<1 || result >1) {
                        res.status(200).send('Either username or password is incorrect')
                    }
                    if (result ===1) {
                        const token = jwt.sign({ name }, jwtKey, {
                            algorithm: "HS256",
                            expiresIn: jwtExpirySeconds,
                        })
                        return res.status(200).json({ token: token, msg: `Welcome ${name}!` });
                    }
                }
            })
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = login;