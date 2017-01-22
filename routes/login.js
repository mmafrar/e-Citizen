var express = require('express');
var router = express.Router();
var app = express();

app.post('/login', function(req, res){
    console.log(req.body);
});

module.exports = router;
