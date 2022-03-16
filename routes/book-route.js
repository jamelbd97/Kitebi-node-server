const express = require("express")
const router = express.Router()
const bookController = require("../controllers/book-controller");
const upload = require('../middlewares/storage-books');

router.route("/one")
    .get(bookController.get)
    .post(upload.single('cover'), bookController.add)
    .put(upload.single('cover'), bookController.update)
    .delete(bookController.delete);

router.route("/all").get(bookController.getAll).delete(bookController.deleteAll);

module.exports = router