var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({
      code:0,
      msg:'数据请求成功',
      data:{
          name:'zhangsan',
          age:18,
          adress:'cq',
          content:'这是一个get请求接口'
      }
  })
});



module.exports = router;
