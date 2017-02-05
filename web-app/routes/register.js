var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var router = express.Router();
var upload = multer();

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/e-citizen');

// create a schema
var userSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    address: {type: String, required: true},
    contact: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    district: {type: String, required: true},
    password: {type: String, required: true}
});

// the schema is useless so far, we need to create a model using it
var User = mongoose.model('User', userSchema);

router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
router.use(upload.array()); // for parsing multipart/form-data
router.use(cookieParser());
router.use(session({resave: true, saveUninitialized: true, secret: "e-Citizen"}));

// Directs the user to dashboard after successful login
router.post('/', function(req, res, next){

    var userInfo = req.body; //Get the parsed information

    var newUser = new User({
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        address: userInfo.address,
        contact: userInfo.contact,
        email: userInfo.email,
        district: userInfo.district,
        password: userInfo.password
    });

    newUser.save(function(err){
        if(err) {
            console.log("Database error");
            res.redirect('/');
        } else {
            console.log("New person added");
            req.session.email = userInfo.email;
            res.redirect('/dashboard');
        }
    });
});

module.exports = router;
