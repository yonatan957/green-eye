const expreess = require("express");
const { login, logout } = require("../controllers/authController");
const router = expreess.Router();

router.post("/login", login)
router.post("/logout", logout)
module.exports = router;
