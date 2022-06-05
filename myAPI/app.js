var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//引入body-parser
const bodyParser = require("body-parser");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//跨域
const cors = require("cors")
var corsOptions = {
  origin: "http://localhost:8080"
 // origin: "http://192.168.43.59:8080"
}
app.use(cors(corsOptions))

//引入db
const db = require("./app/models");
db.sequelize.sync();
//引入路由
require("./app/myroutes/hero.router")(app);
require("./app/myroutes/area.router")(app);
require("./app/myroutes/user.router")(app);
require("./app/myroutes/friend.router")(app);
require("./app/myroutes/myfriend.router")(app);

//用bodyParser解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



app.use(express.static('./img/')); // 设置静态图片访问的路径


// app.get('/',(req,res)=>{
//   res.json({'message':'英雄联盟资料站'})
// })

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// module.exports = app;

//更改启动命令
app.listen(3000,()=>{
  console.log('Express server listening at http://localhost:3000')
});
