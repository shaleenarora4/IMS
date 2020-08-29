var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:5
    },
    isValid:{
        type:Boolean,
        required:true
    }
});

var User = mongoose.model("user", userSchema);

module.exports = User;