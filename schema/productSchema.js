var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var productSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    parentid:{
        type:String,
        required:true,
    }
});

var product = mongoose.model("Product", productSchema);

module.exports = product;