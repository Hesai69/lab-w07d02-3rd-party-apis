const request = require('request');

// https://www.npmjs.com/package/request#custom-http-headers

function get(user) {
  const options = {
    url: `https://api.github.com/users/${user}`,
    headers: {
      'User-Agent': 'whatevs'
    }
  };
  return new Promise( (resolve, reject) => {
    request(options, (err, res, body) => {
      console.log(body);
      if (!err && res.statusCode === 200) {
        const data = JSON.parse(body);
        resolve(data);
      } else {
        reject(err, message);
      }
    });
  });
}

module.exports = {
  get
}
