const express = require('express');
const app = express();
const path = require('path');

const indexRouter = require('./routes/index');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// parse form data
app.use(express.urlencoded({ extended: true }));

// use routes
app.use('/', indexRouter);

app.listen(3000, () => console.log('Server running on port 3000'));
