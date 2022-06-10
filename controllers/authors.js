const express = require('express');
const router = express.Router();
const Author = require('../models/Authors');

router.get('/', async (req, res, next) => {
    Author.find({})
        .then(author => {
            res.json(author)
        })
        .catch(next);
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