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

router.post('/addauthor', (req, res, next) => {
    try {
        const newAuthor = await Author.create(req.params.id)
        res.json(newAuthor)
        return res.redirect('/authors')
    } catch(error) {
        req.error = error;
        return next();
    }
    // Author.create({
    //     name: req.body.name,
    //     img: req.body.img,
    //     bio: req.body.bio,
    // })
    // .then(newAuthor => {
    //     res.json(newAuthor)
    // })
    // .catch(err => console.log(err))
});

router.patch('/:id', async (req, res, next) => {
    try {
        const updatedAuthor = await Author.findByIdAndUpdate(req.params.id)
        res.json(updatedAuthor)
        return res.redirect('/authors')
    } catch(error) {
        req.error = error;
        return next();
    }
    // Author.findOneAndUpdate({
    //     id: req.params.id
    // }, req.body)
    // .then(response => {
    //     res.json(response)
    // })
    // .catch(next)
});

router.delete('/:id', async (req, res, next) => {
    try {
        const deletedAuthor = await Author.findByIdAndDelete(req.params.id)
        res.json(deletedAuthor)
        return res.redirect('/authors')
    } catch(error) {
        req.error = error;
        return next();
    }
})

module.exports = router;