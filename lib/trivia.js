const request = require('request');

function get(num=10, callback) {
const url = `https://www.opentdb.com/api.php?amount=${num}`;
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      callback(data.results);
    }
  });
}

// function getOne(callback) {
//    const url1 = 'https://www.opentdb.com/api.php?amount=1';
//   request(url1, function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//       const data = JSON.parse(body);
//       callback(data.results);
//     }
//   });
// }

module.exports = {
  get
}
