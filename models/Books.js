const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    cover: String,
    author: String,
    published: String
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;