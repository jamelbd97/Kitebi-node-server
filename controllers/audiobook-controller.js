let Audiobook = require("../models/audiobook");

exports.get = async (req, res) => {
    res.send({ audiobook: await Audiobook.findById(req.body._id) });
};

exports.getAll = async (req, res) => {
    res.send({ audiobooks: await Audiobook.find() });
};

exports.add = async (req, res) => {
    const { title, artist } = req.body;
    let audiobook = await new Audiobook({
        title,
        artist,
        coverId: req.files.cover[0].filename,
        audioId: req.files.audio[0].filename
    }).save();
    return res.send({ message: "Audiobook added successfully", audiobook });
};

exports.update = async (req, res) => {
    const { _id, title, artist } = req.body;
    let audiobook = await Audiobook.findById(_id);
    if (audiobook) {
        await audiobook.update({
            $set: {
                title,
                artist,
                coverId: req.files.cover[0].filename,
                audioId: req.files.audio[0].filename
            }
        });
        return res.send({ message: "Audiobook updated successfully" });
    } else {
        return res.send({ message: "Audiobook does not exist" });
    }
};

exports.delete = async (req, res) => {
    let audiobook = await Audiobook.findById(req.body._id);
    if (audiobook) {
        await audiobook.remove();
        return res.send({ message: "Audiobooks" + audiobook._id + " have been deleted" });
    } else {
        return res.send({ message: "Audiobook does not exist" });
    }
};

exports.deleteAll = async (req, res) => {
    await Audiobook.remove({});
    res.send({ message: "All audiobooks have been deleted" });
};