const expreess = require("express");
const {createPoll, getNOtifications, getPollById, reply, deletePoll} = require("../controllers/greenEyeController");
const { onlyCommanders, onlySoldiersAndCommanders } = require("../middlewares/authMiddlewares");
const router = expreess.Router();

router.post('/',onlyCommanders, createPoll)

router.get('/my',onlySoldiersAndCommanders, getNOtifications)

router.get('/:id',onlyCommanders, getPollById)

router.post('/:reply',onlySoldiersAndCommanders, reply)

router.delete('/:id',onlyCommanders, deletePoll)
module.exports = router;