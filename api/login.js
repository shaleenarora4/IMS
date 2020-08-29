var jwt = require('jsonwebtoken');
const User = require("../schema/userSchema");

const jwtKey = "my_secret_key";
const jwtExpirySeconds = 86400;
const login= (req, res) => {
    try {
        const { name, password } = req.body;
        if (!name || !password) {
            return res.status(200).json({msg:"Missing name or Password"});
        }
        else {
            User.count({ name: name, password: password,isValid:true }, function (error, result) {
                if (error) {
                   return res.status(500).json({error:e});
                }
                else {
                    if (result<1 || result >1) {
                        return res.status(200).json({msg:'Not valid credentials. Check with your organisation'});
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
        return res.status(500).json({error:error});
    }
}

module.exports = login;