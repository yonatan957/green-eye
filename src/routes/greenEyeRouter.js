const expreess = require("express");
const {createPoll, getNOtifications, getPollById, reply, deletePoll} = require("../controllers/greenEyeController");
const router = expreess.Router();

router.post('/', createPoll)

router.get('/my', getNOtifications)

router.get('/:id', getPollById)

router.post('/:reply', reply)

router.delete('/:id', deletePoll)
module.exports = router;