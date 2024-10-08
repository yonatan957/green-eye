const expreess = require("express");
const {register, getProfile, setSettings} = require("../controllers/userController");
const { onlySoldiersAndCommanders } = require("../middlewares/authMiddlewares");
const router = expreess.Router();

router.post('/register',register)

router.get('profile',onlySoldiersAndCommanders, getProfile)

router.post('settings',onlySoldiersAndCommanders, setSettings)

module.exports = router;
