##### express+mysql，连接数据库

下载工具：phpstudy+Navicat

开启phpstudy中mysql数据库，然后进入navicat创建数据表

在项目的根目录下创建db.config.js文件

```js
// mysql连接设置
module.exports = {
    host: 'localhost', // 服务器地址
    user: 'root', // mysql用户名称
    password: 'root', // mysql用户密码
    port: '3306', // 端口
    database: 'expressframe', // 数据库名称
  }
```

在项目根目录创建conf文件夹和db.js文件

```js
var mysql = require('mysql')
var dbConfig = require('../db.config')

 module.exports = {
    query:function(sql,params,callback) {
        //创建数据库连接
        var connection = mysql.createConnection(dbConfig)
        connection.connect(function(err){
            if(err){
                throw err
            }
            //操作数据库
            connection.query(sql,params,function(err,results,fiflds){
                if(err){
                    throw err
                }
                //将查询出来的数据返回给回调函数
                callback && callback(
                    JSON.parse(JSON.stringify(results)),
                    JSON.parse(JSON.stringify(fiflds))
                )
                //停止连接数据库
                connection.end(function(err){
                    if(err){
                        console.log('关闭数据库连接失败！');
                        throw err
                    }
                })
            })
        })
    }
}   
```

在routes中的index.js书写接口

```js
//获取用户信息
router.get('/get_user',(req,res,next) => {
  //sql查询user表
  db.query('SELECT * FROM user',[],function(results,fields) {
    //以json的形式返回
    res.json({results})
  })
})
```



