var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var flash = require('flash');
var passport = require('passport');
var user = require('./models/User');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//var profileRouter = require('./routes/profile');

// Conecct to database
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/rontep', {
    useNewUrlParser: true
  })
  .then(() => console.log('connection succesful'))
  .catch((err) => console.error(err));

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//passport
// Manejando sessiones
app.use(session({
  secret: 'keyboard cat dog pig you', // Change for security
  store: new MongoStore({
    mongooseConnection: mongoose.connection
  }),
  name: 'sessionid',
  resave: false,
  saveUninitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// Configurando la estrategia 
passport.use(user.createStrategy());
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

app.use('/', indexRouter);
app.use('/user', usersRouter);
//app.use('/profile',profileRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
