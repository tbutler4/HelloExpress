// new code:
var session = require('express-session');
// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");

var app = express();

app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

// require body-parser
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(request, response) {

})

// app.get("/users", function (request, response){
//     // hard-coded user data
//     var users_array = [
//         {name: "Michael", email: "michael@codingdojo.com"}, 
//         {name: "Jay", email: "jay@codingdojo.com"}, 
//         {name: "Brendan", email: "brendan@codingdojo.com"}, 
//         {name: "Andrew", email: "andrew@codingdojo.com"}
//     ];
//     response.render('users', {people: users_array});
// })

// route to process new user form data:
// app.post('/users', function (req, res){
//     console.log("POST DATA \n\n", req.body)
//     //code to add user to db goes here!
//     // redirect the user back to the root route.  
//     res.redirect('/')
// });

app.get("/users/:id", function (req, res){
    console.log("The user id requested is:", req.params.id);
    // just to illustrate that req.params is usable here:
    res.send("You requested the user with id: " + req.params.id);
    // code to get user from db goes here, etc...
});

app.post('/users', function (req, res){
    // set the name property of session.  
    req.session.name = req.body.name;
    req.session.email = req.body.email;
    console.log(req.session.name);
    console.log(req.session.email);
    //code to add user to db goes here!
    // redirect the user back to the root route. 
    res.redirect('/');
});

app.post('/form', function (req, res){
    // set the name property of session.
    post_data = {
    name: req.body.name,
    location: req.body.location,
    language: req.body.language,
    textarea: req.body.textarea
    };
    console.log(req.body.name);
    console.log(req.body.location);
    console.log(req.body.language);
    console.log(req.body.textarea);
    //code to add user to db goes here!
    // redirect the user back to the root route. 
    res.render('results',{users: post_data});
});

app.get("/cuddles", function (request, response){
    response.render('details');
})

app.get("/temp", function (request, response){
    response.render('temp');
})

app.get("/form", function (request, response){
    response.render('form');
})

app.get("/results", function (request, response){
    response.render('results');
})

app.get("/keylie", function (request, response){
    response.render('details');
})

app.get("/beans", function (request, response){
    response.render('details');
})

app.get("/cars", function (request, response){
    response.render('cars');
})

app.get("/cats", function (request, response){
    response.render('cats');
})

app.get("/cars/new", function (request, response){
    response.render('new');
})

app.use(express.static(__dirname + "/static"));
// \/ This \/ sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000");
})

















// req.session.name = req.body.name;
    // req.session.location = req.body.location;
    // req.session.language = req.body.language;
    // req.session.textarea = req.body.textarea;
    // console.log(req.session.name);
    // console.log(req.session.location);
    // console.log(req.session.language);
    // console.log(req.session.textarea);