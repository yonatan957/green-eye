const mongoose = require("mongoose");
const {UserModel , userSchema} = require("./userModel");
const Schema = mongoose.Schema;
const populationSchema = new Schema({
    areas:[String],
    units:[Number]
})
const greenEyeSchema = new Schema({
    created_at: {type: Date, default: Date.now},
    created_by:{type:mongoose.Schema.Types.ObjectId, ref:"user", required:[true, "User is required"]},
    length: {type: Number, default:3},
    replies:{type:[mongoose.Schema.Types.ObjectId], ref:"user"},
    popllation:{type:populationSchema}
})
const GreenEye = mongoose.model("greenEye", greenEyeSchema);


module.exports = greenEye;