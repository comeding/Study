var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//导入路由模块
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const dataRouter = require('./routes/data');
var nonExistent =require('./routes/404')
var brokenRouter =require('./routes/broken')

var app = express();
//app.use必须在app.set之前，不然页面出不来！！！
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/data', dataRouter);
app.use('/broken',brokenRouter)
app.use('*',nonExistent)


// view engine setup
//设置模板目录和模板引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');




//跨域处理
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());




// catch 404 and forward to error handler
app.use(function(req,res){
  
})


// error handler
app.use(function(err, req, res, next) {
  res.status(500).render('500');
  // set locals, only providing error in development
 /*  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}; */


  // render the error page
  /* res.status(err.status || 500);
  res.render('error'); */
});

module.exports = app;
