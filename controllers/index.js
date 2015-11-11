var express = require('express'),
    router  = express.Router()

router.use('/animals', require('./animals'))

module.exports = router