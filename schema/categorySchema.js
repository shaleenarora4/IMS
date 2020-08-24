var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var categorySchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    }
});

var Category = mongoose.model("Categorie", categorySchema);

module.exports = Category;