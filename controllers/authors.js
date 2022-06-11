const { response } = require('express');
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

router.patch('/authors/:id', (req, res, next) => {
    Author.findOneAndUpdate({
        id: req.params.id
    }, req.body)
    .then(response => {
        res.json(response)
    })
    .catch(next)
});

router.delete('/authors/:id', (req, res, next) => {
    Author.findOne({
        id: req.Author._id
    })
    .then(foundAuthor => {
        return foundAuthor.deleteOne()
    })
    .catch(next)
})

module.exports = router;