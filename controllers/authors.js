const express = require('express');
const { Authors } = require('../models');
const router = express.Router();

router.get('/search', async (req, res) => {
    try {
        res.json(
            await Authors.find({
                name: { $regex: req.query.query, $options: "i" },
            }).limit(20)
        );
    } catch(error) {
        res.status(400).json(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        res.json(await Authors.findById(req.params.id));
    } catch(error) {
        res.status(400).json(error);
    }
});

module.exports = router;