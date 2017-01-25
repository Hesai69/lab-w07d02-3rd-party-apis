const randomword = require('./randomword.js');

const randomUser = require('./randomuser.js');
const recipes = require('./recipes.js');
const github = require('./github.js');

randomword.get(function(data) {
  console.log(data);
});
// randomUser.get( (data) => {
//   console.log(data);
// });

// recipes.search('tacos', function(data) {
//   console.log(data);
// });

// github.get(function(data) {
//   console.log(data);
// });

