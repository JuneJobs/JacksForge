//var http = require('http');
var _webPort = 8080;

var express = require("express");
//var xFrameOptions = require('x-frame-options');
var bodyParser = require('body-parser');
global.app = express();
global.router = express.Router(); //라우터 객체 생성
global.path = __dirname;

var allowCORS = function(req, res, next) {
  res.header('Acess-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  (req.method === 'OPTIONS') ?
    res.send(200) :
    next();
};

// 이 부분은 app.use(router) 전에 추가하도록 하자
app.use(allowCORS);
//app.use(xFrameOptions());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use("/",router);
app.use('/Views', express.static(path + "/Views")); //뷰의 스크립트가 따로 동작 할 수 있도록 셋팅
app.use('/Views/themes', express.static(path + "/Views/themes")); //뷰의 스크립트가 따로 동작 할 수 있도록 셋팅

require('./my_modules/core_router.js'); //웹 클라이언트 라우팅
require('./Controller/common.js'); //공통 데이터베이스 쿼리
//require('./controller/board.js'); //공통 데이터베이스 쿼리


app.listen(_webPort, function () {
  console.log("The server is running");
});