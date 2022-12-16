require('dotenv').config('../.env');
const express = require('express');
const middleware = require('./middleware');
const routes = require('./routes');
const notFoundHandler = require('./error');
const errorHandler = require('./error');

const app = express();
app.use(middleware);
app.use(routes);
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
