const request = require('request');

function search(query, callback) {
const url = `http://www.recipepuppy.com/api/?q=${query}&p=3`;
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      callback(data);
      console.log(data);
    }
  });
}

module.exports = {
  search
};
