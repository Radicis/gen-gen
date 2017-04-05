var express = require('express');
var router = express.Router();
var prefix = require('../json/nouns.json');

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Generator' });
});

router.get('/generate', function(req, res){

    var randPrefix, randPrefix1;

   // while((typeof randPrefix == 'undefined' && typeof randPrefix1 == 'undefined') && randPrefix != randPrefix1) {
        randPrefix = prefix.nouns[Math.floor(Math.random() * prefix.nouns.length)];
        randPrefix1 = prefix.nouns[Math.floor(Math.random() * prefix.nouns.length)];
   // }


    res.json(randPrefix + " " + randPrefix1 + " generator");

});

module.exports = router;
