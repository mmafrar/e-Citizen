var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var session = require('express-session');
var router = express.Router();
var upload = multer();

router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
router.use(upload.array()); // for parsing multipart/form-data

router.use(session({
    secret: "Shh, its a secret!",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));

// Get home page
router.post('/', function(req, res, next) { 
    res.render('dashboard', {title: "Dashboard"});
});

module.exports = router;
