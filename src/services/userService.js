const bcrypt = require("bcrypt")
const {UserModel} = require("../models/userModel")
const createUser = async (user) => {
    try {
        const {user_name, password, role, area, units} = user;
        const hashedPassword = await bcrypt.hash(password, 10);
        const dbuser = new UserModel({user_name, password: hashedPassword, role, area, units});
        await dbuser.save()
    } catch (error) {
        throw error
    }
}

module.exports = {createUser}