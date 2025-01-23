var express = require('express');
var router = express.Router();

const UserService = require('../services/userService');
const userService = new UserService();

// Read all users
router.get('/', (req, res) => {
  const users = userService.getAllUsers();
  res.render('users', { users: users })
});

module.exports = router;