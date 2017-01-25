const request = require('request');

function get(base='USD') {
  const url = `http://api.fixer.io/latest?base=${base}`;
  return new Promise( (resolve, reject) => {
    request(url, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        const data = JSON.parse(body);
        resolve(data);
      } else {
        reject(error, message);
      }
    });
  });
}

module.exports = {
  get
}
