const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', async (req, res, next) => {
    try {
        const books = await db.Book.find({});
        const data = res.json(books);
        console.log(data);
        // const context = { books };
        // return res.render('index.ejs', context);
    } catch(error) {
        req.error = error;
        return next();
    }
});

router.get('/new', (req, res) => {
    res.render('new.ejs');
});

router.get('/:id/', async (req, res, next) => {
    try {
        const foundBook = await db.Book.findById(req.params.id)
        const context = {
            oneBook: foundBook
        }
        return res.render('show.ejs', context)
    } catch(error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

router.post('/', async (req, res, next) => {
    try {
        const createdBook = await db.Book.create(req.body);
        res.redirect('/books');
    } catch(error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

module.exports = router;