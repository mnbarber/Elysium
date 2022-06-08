const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', async (req, res, next) => {
    try {
        const books = await db.Book.find({});
        const context = { books };
        return res.render(context);
    } catch(error) {
        req.error = error;
        return next();
    }
});

module.exports = router;