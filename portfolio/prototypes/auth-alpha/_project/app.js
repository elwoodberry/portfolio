var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    pug = require('pug'),
    expressValidator = require('express-validator'),
    flash = require('connect-flash'),
    session = require('express-session'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    mongo = require('mongodb'),
    mongoose = require('mongoose');

// CONNECT TO DATABASE
mongoose.connect('mongodb://localhost/accessalpha');
var db = mongoose.connection;

// ROUTES
var index = require('./routes/index'),
    users = require('./routes/rt-users');

// EXPRESS
var app = express();

// VIEW ENGINE
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// MIDDLEWARE (favicon, logger, body-parser, cookie-parser)
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// STATIC PATHES
app.use(express.static(path.join(__dirname, 'public')));
app.use('/scripts', express.static(path.join(__dirname, 'node_modules')));

// EXPRESS SESSION
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

// PASSPORT INIT
app.use(passport.initialize());
app.use(passport.session());

// EXPRESS VALIDATOR
app.use(expressValidator({
  errorFormatter: function(param, msg, value){
    var namespace = param.split('.'),
        root = namespace.shift(),
        formParam = root;

    while(namespace.length){
      formParam += '[' + namespace.shift() + ']';
    }

    return {
      param: formParam,
      msg: msg,
      value: value
    };
  }
}));


// CONNECT FLASH
app.use(flash());

// GLOBAL VARIABLES FOR FLASH MESSAGES
app.use(function(req, res, next){
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});

// ROUTES
app.use('/', index);
app.use('/', users);

// ERRORS
// 404
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

// SET PORT
app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function(){
  console.log('Ready');
});
