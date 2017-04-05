var express = require('express');
var router = express.Router();
var prefix = require('../json/nouns.json');
var suffix = require('../json/nouns2.json');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Generator' });
});

router.get('/generate', function(req, res){

    var randPrefix, randPrefix1;

  while((randPrefix == null && randPrefix2==null) && randPrefix!=randPrefix2) {
      randPrefix = prefix.nouns[Math.floor(Math.random() * prefix.nouns.length)];
      randPrefix2 = prefix.nouns[Math.floor(Math.random() * prefix.nouns.length)];
  }
  var randSuffix = suffix.nouns[Math.floor(Math.random() * suffix.nouns.length)];

  res.json(randPrefix + " " + randPrefix2 + " " + randSuffix + " generator");

});

module.exports = router;
