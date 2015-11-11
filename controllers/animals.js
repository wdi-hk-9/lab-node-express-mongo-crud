var express    = require('express'),
    router     = express.Router(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

router.route('/')
  // INDEX
  .get(function(req, res, next) {
    // res.render('index', { header: 'index!'});
    res.send('welcome');
  })

module.exports = router