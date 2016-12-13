/**
 * Created by Administrator on 2016/10/17.
 */
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/sslpdzb'); //连接到一个test的数据库
db.connection.on("error", function (error) {
    console.log("数据库连接失败：" + error);
});
db.connection.on("open", function () {
    console.log("------数据库连接成功！------");
});
module.exports = db;