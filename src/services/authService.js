const jwt = require("jsonwebtoken");
const {UserModel} = require("../models/userModel");
const bcrypt = require("bcrypt");
const login = async (user) => {
    try {
        const dbUser = await UserModel.findOne({user_name: user.user_name});
        if (!dbUser) {
            throw new Error("User not found");
        }
        if (! await bcrypt.compare(user.password, dbUser.password)){
            throw new Error("Wrong password!!!");
        }
        const token = jwt.sign({user_name: dbUser.user_name, role:dbUser.role}, process.env.JWT_SECRET, {expiresIn:"3m"}); 
        return token
    } catch (error) {
        console.log(error)
        throw error
    }
}

module.exports = {login}
