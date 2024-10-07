const {login: loginFromService} = require("../services/authService");
const login = async (req, res) => {
    try {
        const token = await loginFromService(req.body)
        res.cookie("token", token)
        res.json({msg:`welcome ${req.body.user_name}! so good to see you !!`,token})
    } catch (error) {
        res.status(400).json({error})
    }
}

const logout = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

module.exports = {login, logout}