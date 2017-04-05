var express = require('express');
var router = express.Router();
var prefix = require('../json/nouns.json');

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index');
});

router.get('/generate', function(req, res){

    var randPrefix, randPrefix1;

    randPrefix = prefix.nouns[Math.floor(Math.random() * prefix.nouns.length)];
    randPrefix1 = prefix.nouns[Math.floor(Math.random() * prefix.nouns.length)];

    res.json(randPrefix.charAt(0).toUpperCase() + randPrefix.slice(1) + " " + randPrefix1.charAt(0).toUpperCase() + randPrefix1.slice(1) + " Generator");

});

module.exports = router;
