const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', async (req, res, next) => {
    try {
        const books = await db.Book.find({});
        const data = res.json(books);
    } catch(error) {
        req.error = error;
        return next();
    }
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