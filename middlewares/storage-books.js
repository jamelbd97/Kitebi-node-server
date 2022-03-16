const multer = require("multer")

const storage = multer.diskStorage({
  destination: function (request, file, callback) {
    callback(null, './uploads/books');
  },
  filename: function (request, file, callback) {
    callback(null, "book" + Date.now());
  }
});

module.exports = multer({ storage: storage })