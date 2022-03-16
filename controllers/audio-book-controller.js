let AudioBook = require("../models/audio-book");

exports.get = async (req, res) => {
    res.send({ audioBook: await AudioBook.findById(req.body._id) });
};

exports.getAll = async (req, res) => {
    res.send({ audioBooks: await AudioBook.find() });
};

exports.add = async (req, res) => {
    const { title, artist } = req.body;
    let audioBook = await new AudioBook({
        title,
        artist,
        coverId: req.files.cover[0].filename,
        audioId: req.files.audio[0].filename
    }).save();
    return res.send({ message: "AudioBook added successfully", audioBook });
};

exports.update = async (req, res) => {
    const { _id, title, artist } = req.body;
    let audioBook = await AudioBook.findById(_id);
    if (audioBook) {
        await audioBook.update({
            $set: {
                title,
                artist,
                coverId: req.files.cover[0].filename,
                audioId: req.files.audio[0].filename
            }
        });
        return res.send({ message: "AudioBook updated successfully" });
    } else {
        return res.send({ message: "AudioBook does not exist" });
    }
};

exports.delete = async (req, res) => {
    let audioBook = await AudioBook.findById(req.body._id);
    if (audioBook) {
        await audioBook.remove();
        return res.send({ message: "AudioBooks" + audioBook._id + " have been deleted" });
    } else {
        return res.send({ message: "AudioBook does not exist" });
    }
};

exports.deleteAll = async (req, res) => {
    await AudioBook.remove({});
    res.send({ message: "All audioBooks have been deleted" });
};