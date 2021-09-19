##### 创建一个express项目

```js
npx express-generator
```

##### 基本路由

- 在router文件夹中新建路由js文件

  ```js
  var express = require('express');
  var router = express.Router();
  
  router.get('/',function(req,res){
      res.send()  //返回数据
  })
  ```

  ```js
  var express = require('express');
  var router = express.Router();
  
  router.get('/',function(req,res){
      res.render('index')  //模板渲染
  })
  ```

- 在views中新建`index.hbs`文件，书写`html`代码

- 在`app.js`中导入路由模块

  ```js
  const indexRouter = require('./routes/index');
  ```

- 使用路由(`app.use`必须在`app.set`之前，不然页面出不来)

  ```
  app.use('/', indexRouter);
  ```

- 指定模板存放目录与模板引擎

  ```js
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'hbs');
  ```

##### express热更新

```js
npm install nodemon --save-dev  //安装
```

```js
"scripts": {
    "start": "nodemon server.js",  //加入start命令
  },
```

##### 404界面重定向

- 书写404路由

  ```js
  router.get('/',function(req, res, next) {
      res.status(404).render('404', { url: req.originalUrl });
     });
  ```

- 在所以路由最后面书写

  ```js
  app.use('/*',nonExistent)
  ```

- 将样式提到`app.use`最上面

  ```js
  app.use(express.static(path.join(__dirname, 'public')));
  ```

##### 服务器错误重定向

- 书写500路由

  ```js
  router.get('/',function(req, res, next) {
      throw new Error('Broken!');
    });
  ```

- 使用路由

  ```js
  app.use('/broken',brokenRouter)
  ```

- 最后在以下代码块内书写，参数err为错误

  ```js
  app.use(function(err, req, res, next) {
    res.status(500).render('500');
  });
  ```

  





