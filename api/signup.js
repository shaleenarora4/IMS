const User = require("../schema/userSchema");

const signup = (req, res) => {
    try {
        const { name, password } = req.body;
        if (!name || !password) {
            return res.status(200).json({msg:"Missing name or Password"});
        }
        else {
            User.count({ name: name, password: password }, function (e, result) {
                if (e) {
                    return res.status(500).json({error:e});
                }
                else {
                    if (result === 1) {
                        return res.status(200).json({msg:"Signup Successfull"});
                    }
                    else {
                        return res.status(200).json({msg:"Invalid User"});
                    }
                }
            });
        }
    }
    catch (error) {
       return  res.status(500).json({error:error});
    }
}

module.exports = signup;