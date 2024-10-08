const expreess = require("express");
const { login, logout } = require("../controllers/authController");
const { onlySoldiersAndCommanders } = require("../middlewares/authMiddlewares");
const router = expreess.Router();

router.post("/login", login)
router.post("/logout",onlySoldiersAndCommanders, logout)
module.exports = router;
