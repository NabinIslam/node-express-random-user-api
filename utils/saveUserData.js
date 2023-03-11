const fs = require('fs');

module.exports.saveUserData = data => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync('../data.json', stringifyData);
};
