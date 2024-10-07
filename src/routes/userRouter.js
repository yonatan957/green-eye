const expreess = require("express");
const {register, getProfile, setSettings} = require("../controllers/userController");
const router = expreess.Router();

router.post('register',register)

router.get('profile', getProfile)

router.post('settings', setSettings
)

module.exports = router;
