const User = require("../schema/userSchema");

const signup = (req, res) => {
    try {
        const { name, password } = req.body;
        if (!name || !password) {
            return res.status(200).json({msg:"Missing name or Password"});
        }
        else {
            User.create({ name: name, password: password,isValid:true }, function (e, result) {
                if (e) 
                    return res.json({msg:"User already exists"});
                
                else                 
                        return res.json({msg:"Signup Successfull"});                 
                });
        }
    }
    catch (error) {
       return  res.status(500).json({error:error});
    }
}

module.exports = signup;

