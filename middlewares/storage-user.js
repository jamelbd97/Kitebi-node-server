const multer = require("multer")

const storage = multer.diskStorage({
  destination: function (request, file, callback) {
    callback(null, './uploads/users');
  },
  filename: function (request, file, callback) {
    callback(null, "picture" + Date.now());
  }
});

module.exports = multer({ storage: storage })