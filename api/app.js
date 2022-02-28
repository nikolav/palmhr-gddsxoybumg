var express      = require('express');
var path         = require('path');
var cookieParser = require('cookie-parser');
var logger       = require('morgan');
const cors       = require("cors");

var indexRouter = require('./routes/index');
var adminRouter = require('./routes/users');
var dateRouter  = require('./routes/date');

var app = express();

app.use(logger('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, '../build')));
// app.use(express.static(path.resolve(__dirname, 'ghrunner', '_work', 'palmhr-gddsxoybumg', 'palmhr-gddsxoybumg', 'build')));
app.use(cors());

app.use('/api',   indexRouter);
app.use('/admin', adminRouter);
app.use('/date',  dateRouter);
// app.use('/users', usersRouter);

module.exports = app;

