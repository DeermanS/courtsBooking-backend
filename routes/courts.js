var express = require('express');
var router = express.Router();
var dbConnection = require('../database');

/* GET courts listing. */
router.get('/', function(req, res, next) {
  res.send('courts');
});

//get all courts
router.get('/allCourts', function(req, res, next) {
  getAllCourts(req,res);
});

function getAllCourts (req, res) {
  dbConnection.db.any(
    `SELECT * FROM courts`
    ).then((dataFromDB)=>{res.send(dataFromDB);})
}

module.exports = router;