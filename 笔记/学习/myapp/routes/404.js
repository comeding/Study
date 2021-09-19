var express = require('express');
var router = express.Router();
router.get('/',function(req, res, next) {
    res.status(404).render('404', { url: req.originalUrl });
   });


module.exports = router;