const request = require('request');
const url = 'https://randomuser.me/api/';

function get(callback) {
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      callback(data);
    }
  });
}

module.exports = {
  get
}
