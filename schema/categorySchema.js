var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var categorySchema = new Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
    }
});

var Category = mongoose.model("Categorie", categorySchema);

module.exports = Category;