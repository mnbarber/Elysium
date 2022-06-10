const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', async (req, res, next) => {
    try {
        const authors = await db.Author.find({});
        const data = res.json(authors);
    } catch(error) {
        req.error = error;
        return next();
    }
});

router.post('/newauthor', (req, res, next) => {
    Author.create({
        name: req.body.name,
        img: req.body.img,
        bio: req.body.bio,
    })
    .then(newAuthor => {
        res.json(newAuthor)
    })
    .catch(err => console.log(err))
});

module.exports = router;