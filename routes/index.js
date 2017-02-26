var express = require('express');
var router = express.Router();
var app = express();
var db = require('../models/db.js');
var db_url = 'mongodb://localhost:27017/e-citizen';

// Get home page
router.get('/', function(req, res, next) {
	res.render('index', { title: 'e-Citizen' });
});

// Get login page
router.post('/login', function(req, res, next) {
	console.log(req.body);
	res.render('login', { title: "Logged in" });
});

router.get('/all', function(req, res){
	var collection = db.get().collection('User');
	console.log(collection.find());
})

module.exports = router;
