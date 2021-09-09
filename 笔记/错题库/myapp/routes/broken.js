var express = require('express');
var router = express.Router();

router.get('/',function(req, res, next) {
    throw new Error('Broken!');
  });


module.exports = router;