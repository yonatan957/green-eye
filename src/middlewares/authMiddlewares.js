const jwt = require("jsonwebtoken")

const onlyCommanders = async (req, res, next) => {
    try {
        
    } catch (error) {
        
    }
}
const onlySoldiersAndCommanders = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        const user = await jwt.verify(token, process.env.JWT_SECRET);

        req.user = user;
        
    } catch (error) {

    }
}

module.exports = {onlyCommanders, onlySoldiersAndCommanders}