var express = require('express');
var router = express.Router();
var prefix = require('../json/nouns.json');
var buzz = require('../json/buzzWords.json');

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index');
});

router.get('/generate', function(req, res){

    var randPrefix, randPrefix, randBuzzWord;

    randPrefix = prefix.nouns[Math.floor(Math.random() * prefix.nouns.length)];
    randPrefix1 = prefix.nouns[Math.floor(Math.random() * prefix.nouns.length)];

    randBuzzWord = buzz.nouns[Math.floor(Math.random() * buzz.nouns.length)];

    res.json(randPrefix.charAt(0).toUpperCase() + randPrefix.slice(1) + " " +  randBuzzWord.charAt(0).toUpperCase() + randBuzzWord.slice(1) + " Generator");

});

module.exports = router;
