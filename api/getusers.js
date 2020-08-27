const User = require("../schema/userSchema");

const getusers = (req, res) =>{

    try {
        User.find({}).then((data)=>
        {res.json({users:data})}).catch((error)=>
        {res.status(500).json({error:error})});
    } catch (error) {
        return res.status(500).json({error:error});
    }
}

module.exports = getusers;