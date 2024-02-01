var express = require('express');
var router = express.Router();
var dbConnection = require('../database');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('users');
});

// get all users
router.get('/allUsers', function(req, res, next) {
  getAllUsers(req,res);
});

// get user information by user id
router.get('/user/:userid', function(req, res, next) {
  getUserById(req,res);
});

// insert new user
router.post('/addNewUser', function(req, res, next) {
  createUser(req,res);
});

function createUser(req, res) {
  const userFirstName = req.body.firstname;
  const userLastName = req.body.lastname;
  const phonenumber = req.body.phonenumber;
  const email = req.body.email;
  const permission = req.body.permission;
  dbConnection.db.none(
    `INSERT INTO users (firstname, lastname, phonenumber, email, permission)
    VALUES ('${userFirstName}','${userLastName}', '${phonenumber}', '${email}', '${permission}')
    ;`)
  res.send(200);
}

function getUserById (req, res) {
  const userid = req.params.userid;
  dbConnection.db.any(
    `SELECT * FROM users WHERE id = ${userid}`
    ).then((dataFromDB)=>{res.send(dataFromDB);})
}

function getAllUsers (req, res) {
  dbConnection.db.any(
    `SELECT * FROM users`
    ).then((dataFromDB)=>{res.send(dataFromDB);})
}

module.exports = router;