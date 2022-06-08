const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    },
    content: String,
    book: {
        type: mongoose.Types.ObjectId,
        ref: 'Book'
    }
}, {timestamps: true});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;