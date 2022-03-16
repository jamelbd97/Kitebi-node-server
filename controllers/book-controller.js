let Book = require("../models/book");

exports.get = async (req, res) => {
    res.send({ book: await Book.findById(req.body._id) });
};

exports.getAll = async (req, res) => {
    res.send({ books: await Book.find() });
};

exports.add = async (req, res) => {
    const { title, artist, coverId, audioId } = req.body;
    let book = await new Book({
        title,
        artist,
        coverId: req.file.filename,
        audioId
    }).save();
    return res.send({ message: "Book added successfully", book });
};

exports.update = async (req, res) => {
    const { _id, title, artist, coverId, audioId } = req.body;
    let book = await Book.findById(_id);
    if (book) {
        await book.update({
            $set: {
                title,
                artist,
                coverId: req.file.filename,
                audioId
            }
        });
        return res.send({ message: "Book updated successfully" });
    } else {
        return res.send({ message: "Book does not exist" });
    }
};

exports.delete = async (req, res) => {
    let book = await Book.findById(req.body._id);
    if (book) {
        await book.remove();
        return res.send({ message: "Books" + book._id + " have been deleted" });
    } else {
        return res.send({ message: "Book does not exist" });
    }
};

exports.deleteAll = async (req, res) => {
    await Book.remove({});
    res.send({ message: "All books have been deleted" });
};