const request = require('request');
const url = 'https://api.github.com/users/hesai69';
const options = {
  url: url,
  headers: {
    'User-Agent': 'request'
  }
};

function get(callback) {
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      callback(data);
    }
  });
}

module.exports = {
  get
}
