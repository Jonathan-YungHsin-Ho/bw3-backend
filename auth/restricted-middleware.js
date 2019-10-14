const bcrypt = require('bcryptjs');

module.exports = function restricted(req, res, next) {
  const { username, password } = req.headers;

  if (username && password) {
  }
};
