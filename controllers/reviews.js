const express = require('express');
const { Reviews } = require('../models');
const router = express.Router();

router.get('/:bookId', async (req, res) => {
    try {
        res.json(await Reviews.findById({ book: req.params.bookId}));
    } catch(error) {
        res.status(400).json(error);
    }
});

router.post('/:bookId', async (req, res) => {
    try {
        await Reviews.updateOne(
            {
                book: req.params.bookId,
            },
            {
                content: req.body.content,
                rating: req.body.rating,
                book: req.params.bookId,
            },
            {
                upsert: true,
            }
        );
        res.status(200).send('ok');
    } catch(error) {
        res.status(400).json(error);
    }
});

router.delete('/:bookId', async (req, res) => {
    try {
        res.json(
            await Reviews.findByIdAndDelete({
                book: req.params.bookId,
            })
        );
    } catch(error) {
        res.status(400).json(error);
    }
});

module.exports = router;