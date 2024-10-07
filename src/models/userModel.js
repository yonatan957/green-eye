const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    user_name: {type: String, required: [true, "User name is required"], minLength: [3, "User name must be at least 3 characters"], maxLength: 20},
    password: {type: String, required: [true, "Password is required"], minLength: [3, "Password must be at least 3 characters"], maxLength: 20},
    role:{type:String, enum:["soldier", "commander"], required},
    area:{type:String, enum:["north", "south", "east", "west", "center"], required:[true, "Area is required"]},
    units:[{type:[Number], required:[true, "Units are required"]}]
})
const UserModel = mongoose.model("user", userSchema);


module.exports = {UserModel, userSchema}
