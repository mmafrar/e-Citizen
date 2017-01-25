var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var router = express.Router();
var upload = multer();

router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
router.use(upload.array()); // for parsing multipart/form-data
router.use(cookieParser());
router.use(session({secret: "Shh, its a secret!", saveUninitialized: true, resave: true}));

// Get home page
router.get('/', function(req, res, next) {
    console.log(req.session);
    res.render('dashboard', { title: "Dashboard" });
});

module.exports = router;