var express = require('express');
//var db = require('./public/server/mongoose');
var router = express.Router();
//数据库
/*var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/sslpdzb'); //连接到一个test的数据库
db.connection.on("error", function (error) {
  console.log("数据库连接失败：" + error);
});
db.connection.on("open", function () {
  console.log("------数据库连接成功！------");
});*/
/*// 第一步 Schema
var testSchema = new mongoose.Schema({
  name:{ type:String },
  age:{ type:Number,default:0 }
});
// 第二步 model
var TestModel = db.model('test3', testSchema);
// 第三步 Entity
var testEntity = new TestModel({
  name:'zzx',
  age:20
});
testEntity.save(function (err, docs) {
  if(err){console.log("err:"+err)}else{console.log(docs)};
});
 */
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
