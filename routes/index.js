var express = require('express');
var router = express.Router();

//TODO: 
// 0. 优先写get all courts 连接前端
// 1. 验证所有input不能为空
// 2. 邮箱地址不能重复
// 3. 完成所有的api（晚点再做）
// 4. 完成api：通过court找feestatus
// 5. 连接前后端

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Welcome to courtsBooking!');
});

module.exports = router;
