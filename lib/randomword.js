const request = require('request');
const url = 'http://randomword.setgetgo.com/get.php';

function get() {
  return new Promise( (resolve, reject) => {
    request(url, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        resolve(body);
      } else {
        reject(error, message);
      }
    })
  });
}

module.exports = {
  get
}
