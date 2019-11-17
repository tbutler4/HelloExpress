var express = require("express");

var session = require('express-session');
//app.use(session({secret: 'coding'}));

var bodyParser = require('body-parser')
//app.use(bodyParser.urlencoded({extended: true}));

var app = express();

app.use(session({
  secret: 'upup',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));


app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/count', function (req, res){
    if (req.session.count == null){
      req.session.count = 1;
      console.log(req.session.count);
    }
    else {
      req.session.count += 1;
      console.log(req.session.count);
    }

    res.render('counter', {count: req.session.count});
});

app.get('/two', function (req, res){
  req.session.count += 1;
  res.redirect('/count');
});

app.get('/reset', function (req, res){
    req.session.count = 0;
    res.redirect('/count');
});

app.listen(8000, function() {
  console.log("listening on port 8000");
})