const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const language = new Schema({
    title : String ,
    imageUrl :  String,

})

const languages = mongoose.model("language", language);

module.exports = languages;
