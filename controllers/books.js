const express = require('express');
const router = express.Router();
const Book = require('../models/Books')

router.get('/', async (req, res, next) => {
    Book.find({})
        .then(book => {
            res.json(book)
        })
        .catch(next);
});

router.post('/', async (req, res, next) => {
    try {
        const newBook = await Book.create({
            title: req.body.title,
            cover: req.body.cover,
            author: req.body.author,
            published: req.body.published
        })
        res.json(newBook)
    } catch(error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

router.put('/:id/edit', async (req, res, next) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            cover: req.body.cover,
            author: req.body.author,
            published: req.body.published
        })
        res.json(updatedBook)
    } catch(error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id)
        res.json(deletedBook)
        return res.redirect('/books')
    } catch(error) {
        req.error = error;
        return next();
    }
    // Book.findOne({
    //     id: req.Book._id
    // })
    // .then(foundBook => {
    //     return foundBook.deleteOne()
    // })
    // .catch(next)
})

module.exports = router;