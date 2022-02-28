var express      = require('express');
var path         = require('path');
var cookieParser = require('cookie-parser');
var logger       = require('morgan');
const cors       = require("cors");

var indexRouter = require('./routes/index');

var app = express();

app.use(logger('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, '../build')));
// app.use(express.static(path.resolve(__dirname, 'ghrunner', '_work', 'palmhr-gddsxoybumg', 'palmhr-gddsxoybumg', 'build')));
app.use(cors());

app.use('/api',   indexRouter);

module.exports = app;

