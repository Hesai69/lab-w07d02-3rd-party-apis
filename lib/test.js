// const randomUser = require('./randomuser.js');
// const recipes = require('./recipes.js');
// const randomWord = require('./randomword.js');
// const exchange = require('./exchange.js');
// const trivia = require('./trivia.js');
const github = require('./github');

// randomUser.get()
//   .then( (user) => {
//     console.log(user);
//   }).catch( (err, res) => {
//     console.log(err, res);
//   });

// recipes.search('soup')
//   .then( (data) => {
//   console.log(data);
// }).catch( (err, res) => {
//   console.log(err, res);
// });

// randomWord.get()
//   .then( (word) => {
//     console.log(word);
//   }).catch( (err, res) => {
//     console.log(err, res);
//   });

// exchange.get('USD')
//   .then( (data) => {
//     console.log(data);
//   }).catch( (err, res) => {
//     console.log(err, res);
//   });

// trivia.get()
//   .then( (data) => {
//     console.log(data);
//   }).catch( (err, res) => {
//     console.log(err, res);
//   });

github.get('hesai69')
  .then( (data) => {
    console.log(data);
  }).catch( (err, res) => {
    console.log(err, res);
  });
