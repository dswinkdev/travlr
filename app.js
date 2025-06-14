var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('hbs');
var cors = require('cors'); // ✅ Import CORS

// Define routers
var indexRouter = require('./app_server/routes/index');
var usersRouter = require('./app_server/routes/users');
var travelRouter = require('./app_server/routes/travel');
var apiRouter = require('./app_api/routes/index');

// Bring in the database
require('./app_api/models/db');

var app = express();

// ✅ View engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
hbs.registerPartials(path.join(__dirname, '/app_server/views/partials'));
app.set('view engine', 'hbs');

// ✅ Middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Enable CORS for API calls from Angular
app.use('/api', cors({
  origin: 'http://localhost:4200', // Angular development server
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// ✅ Mount routers
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/travel', travelRouter);
app.use('/api', apiRouter);

// ✅ Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// ✅ Error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

// ✅ Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
