const express = require("express")
const router = express.Router()
const audioBookController = require("../controllers/audio-book-controller");
const upload = require('../middlewares/storage-audio-books');

router.route("/one")
    .get(audioBookController.get)
    .post(upload.fields([{ name: "cover", maxCount: 1, }, { name: "audio", maxCount: 1, },]), audioBookController.add)
    .put(upload.fields([{ name: "cover", maxCount: 1, }, { name: "audio", maxCount: 1, },]), audioBookController.update)
    .delete(audioBookController.delete);

router.route("/all").get(audioBookController.getAll).delete(audioBookController.deleteAll);

module.exports = router