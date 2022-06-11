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

router.post('/newbook', (req, res, next) => {
    Book.create({
        title: req.body.title,
        cover: req.body.cover,
        author: req.body.author,
        published: req.body.published
    })
    .then(newBook => {
        res.json(newBook)
    })
    .catch(err => console.log(err))
});

router.patch('/books/:id', (req, res, next) => {
    Book.findOneAndUpdate({
        id: req.params.id
    }, req.body)
    .then(response => {
        res.json(response)
    })
    .catch(next)
});

router.delete('/books/:id', (req, res, next) => {
    Book.findOne({
        id: req.Book._id
    })
    .then(foundBook => {
        return foundBook.deleteOne()
    })
    .catch(next)
})

module.exports = router;