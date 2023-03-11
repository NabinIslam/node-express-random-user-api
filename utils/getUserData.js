const fs = require('fs');

module.exports.getUserData = () => {
  const jsonData = fs.readFileSync('../data.json');
  return JSON.parse(jsonData);
};
