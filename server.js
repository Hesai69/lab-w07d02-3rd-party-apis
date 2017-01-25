const express = require('express');
const bodyParser = require('body-parser');
//const favicon = require('serve-favicon');
const hbs  = require('express-handlebars');
const app = express();

const randomword = require('./lib/randomword.js');
const randomuser = require('./lib/randomuser.js');
const trivia = require('./lib/trivia.js');

app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'main', layoutsDir: __dirname + '/views/layout/'}));
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//app.use(favicon(__dirname + '/public/panda.ico'));

//routes
app.get('/', function(req, res) {
  res.render('index', {title: '3rd Party APIs'});
});

app.get('/random', function(req, res) {
  res.render('random');
});

app.get('/randomword', function(req, res) {
  randomword.get(function(data) {
    res.json({word: data});
  });
});

app.get('/randomuser', function(req, res) {
  randomuser.get(function(data) {
    console.log(data);
    res.json(data.results[0]);
  });
});

app.get('/game', function(req, res) {
  res.render('game');
});

app.get('/trivia', function(req, res) {
  var questions = [];
  if(req.query.n) {
    trivia.get(req.query.n, function(data) {
      data.forEach(function(obj) {
        questions.push(obj.question);
      });
      res.json(questions);
    });
  } else {
    trivia.get(function(data) {
      data.forEach(function(obj) {
        questions.push(obj.question);
      });
      console.log(questions);
      res.json({questions: questions});
    });
  }
});


var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Listening on port ' + port);
});
