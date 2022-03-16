const mongoose = require("mongoose");

const AudiobookSchema = new mongoose.Schema(
    {
        title: { type: String },
        artist: { type: String },
        coverId: { type: String },
        audioId: { type: String }
    },
    {
        timestamps: { currentTime: () => Date.now() },
    }
);
module.exports = mongoose.model("Audiobook", AudiobookSchema);
