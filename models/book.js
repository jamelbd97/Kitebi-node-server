const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
    {
        title: { type: String },
        artist: { type: String },
        coverId: { type: String }
    },
    {
        timestamps: { currentTime: () => Date.now() },
    }
);
module.exports = mongoose.model("Book", BookSchema);
