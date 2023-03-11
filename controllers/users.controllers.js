let users = require('../data.json');
const fs = require('fs');
const { getUserData } = require('../utils/getUserData');

module.exports.getAllUsers = (req, res) => {
  const { limit } = req.query;
  res.json(users.slice(0, limit));
};

module.exports.getARandomUser = (req, res) => {
  const randomId = Math.floor(Math.random() * 6);
  const singleUser = users.find(user => user.id === Number(randomId));
  res.send(singleUser);
};

module.exports.postUser = (req, res) => {
  const existUsers = getUserData();
  const newAccountId = Math.floor(100000 + Math.random() * 900000);

  existUsers[newAccountId] = req.body;

  saveAccountData(existAccounts);

  res.send({ success: true, msg: 'account added successfully' });
};

module.exports.updateUser = () => {};

module.exports.bulkUpdateUser = () => {};

module.exports.deleteUser = () => {};
