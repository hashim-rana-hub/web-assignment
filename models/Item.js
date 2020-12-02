var mongoose = require("mongoose");

var items_Schema = mongoose.Schema({
    Name:String,
    Shape:String,
    Rout:String,
    Price:String,
});

const Items = mongoose.model("Items", items_Schema);
module.exports = Items;