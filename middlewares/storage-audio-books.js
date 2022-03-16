const multer = require("multer")

const storage = multer.diskStorage({
  destination: function (request, file, callback) {
    callback(null, './images/uploads/audio-books');
  },
  filename: function (request, file, callback) {
    callback(null, "audiobook" + Date.now());
  }
});

module.exports = multer({ storage: storage })