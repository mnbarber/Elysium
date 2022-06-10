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

module.exports = router;