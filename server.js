require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const controllers = require('./controllers');
const methodOverride = require('method-override');
const cors = require('cors');
const morgan = require('morgan');

require('./config/db.connection');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(cors(), function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
app.use(morgan('dev'));
app.use(express.json());
app.use('/books', controllers.books);
app.use('/authors', controllers.authors);
app.use('/reviews', controllers.reviews);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}...`));