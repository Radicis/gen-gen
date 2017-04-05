var express = require('express');
var router = express.Router();
var prefix = require('../json/nouns.json');
var buzz = require('../json/buzzWords.json');
var appType = require('../json/appType.json');

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index');
});

router.get('/generate', function(req, res){

    var randPrefix = prefix.nouns[Math.floor(Math.random() * prefix.nouns.length)];
    var randPrefix1 = prefix.nouns[Math.floor(Math.random() * prefix.nouns.length)];
    var randBuzzWord = buzz.nouns[Math.floor(Math.random() * buzz.nouns.length)];
    var randAppType = appType.nouns[Math.floor(Math.random() * appType.nouns.length)];

    res.json(cap(randPrefix) + " " +  cap(randPrefix1) + " " +  cap(randBuzzWord) + " " + cap(randAppType));

});

var cap = function(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
};

module.exports = router;
