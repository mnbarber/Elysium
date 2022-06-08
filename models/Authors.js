const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    img: String,
    bio: String
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;