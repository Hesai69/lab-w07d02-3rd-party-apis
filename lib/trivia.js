const request = require('request');
const url = 'https://opentdb.com/api.php?amount=10';

function get() {
  return new Promise( (resolve, reject) => {
    request.get(url, (err, response, body) => {
      if (!err && response.statusCode === 200) {
        const data = JSON.parse(body);
        resolve(data.results);
      } else {
        reject(err, message);
      }
    });
  });
}

module.exports = {
  get
}
