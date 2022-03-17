const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: { type: String },
    password: { type: String },
    firstname: { type: String },
    lastname: { type: String },
    birthdate: { type: Date },
    gender: {
      type: String,
      enum: {
        values: ['Male', 'Female'],
        message: '{VALUE} is not supported'
      }
    },
    pictureId: { type: String },
    isVerified: { type: Boolean },
    favoriteBooks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
    favoriteAudiobooks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Audiobook" }],
    role: {
      type: String,
      enum: {
        values: ['ROLE_ADMIN', 'ROLE_USER', 'ROLE_OTHER'],
        message: '{VALUE} is not supported'
      }
    }
  },
  {
    timestamps: { currentTime: () => Date.now() },
  }
);
module.exports = mongoose.model("User", UserSchema);
