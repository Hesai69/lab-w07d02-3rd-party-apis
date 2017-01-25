const request = require('request');

function search(query) {
  const url = `http://www.recipepuppy.com/api/?q=${query}&p=3`
  return new Promise( (resolve, reject) => {
    request(url, (err, res, body) => {
      if (!err && res.statusCode === 200) {
        const data = JSON.parse(body);
        resolve(data.results);
      } else {
        reject(error, message);
      }
    });
  });
}

module.exports = {
  search
}
