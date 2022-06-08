require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const { books, authors, reviews } = require('./controllers');
const methodOverride = require('method-override');
const cors = require('cors');
const morgan = require('morgan');

require('./config/db.connection');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/books', books);
app.use('/authors', authors);
app.use('/reviews', reviews)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}...`));