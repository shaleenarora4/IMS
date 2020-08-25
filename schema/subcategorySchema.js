var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var subcategorySchema = new Schema({
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

var Subcategory = mongoose.model("Subcategorie", subcategorySchema);

module.exports = Subcategory;