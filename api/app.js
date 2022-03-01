const express      = require('express');
const path         = require('path');
const cookieParser = require('cookie-parser');
const logger       = require('morgan');
const cors         = require("cors");

const indexRouter = require('./routes/index');


const app = express();

// dump unformated
app.use(logger('combined'));

// parse incoming json bodies
app.use(express.json());

// parse user input
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

// send static files
app.use(express.static(path.resolve(__dirname, '../build')));

// route xsite requests
app.use(cors());

// mount api resource
app.use('/api', indexRouter);


module.exports = app;
