const request = require('request');
const url = 'http://randomword.setgetgo.com/get.php';

function get(callback) {
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(body);
    }
  });
}

module.exports = {
  get
};
