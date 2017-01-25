const request = require('request')
const url = 'https://randomuser.me/api/';

function get() {
  return new Promise( (resolve, reject) => {
    request(url, (err, res, body) => {
      if (!err && res.statusCode === 200) {
        const data = JSON.parse(body);
        const user = data.results[0];
        resolve(user);
      } else {
        reject(err, message);
      }
    });
  });
}

module.exports = {
  get
}
