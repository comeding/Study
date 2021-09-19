var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',function(req, res, next) {
 res.render('index')
});

router.get('/contact',function(req, res, next) {
  res.render('contact');  //输出模板
});

router.get('/api',function(req, res, next) {
  res.json({
    name: '图雀社区', website: 'https://tuture.co'
  })
});



module.exports = router;
