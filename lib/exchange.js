const request = require('request');
const url = 'http://api.fixer.io/latest?symbols=USD,CNY';

function get(callback) {
  request(url, (err, res, body) => {
    if (!error && res.statusCode == 200) {
      const data = JSON.parse(body);
      console.log(data);
      callback(data);
    }
  });
}

module.exports = {
  get
};
