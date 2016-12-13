var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = require('../public/server/mongoose');

/* GET users listing. */
//登陆
router.get('/', function (req, res, next) {
    res.render('user/login', {title: '登陆'});
});
router.get('/login', function (req, res, next) {
    res.render('user/login', {title: '登陆'});
});
router.post('/login', function (req, res, next) {

});


//注册
router.get('/sigoup', function (req, res, next) {
    res.render('user/sigoup', {title: '注册'});
});
router.post('/sigoup', function (req, res, next) {
    var data = {};
    data.name = req.body.name;
    data.pwd = req.body.pwd;
    console.log(data.name + '++++++++' + data.pwd);
    //写入数据库
    // 第一步 Schema
    var testSchema = new mongoose.Schema({
        pwd: {type: String},
        name: {type: String}

    });
    // 第二步 model
    var TestModel = db.model('user', testSchema);
    // 第三步 Entity
    var testEntity = new TestModel({
        pwd: data.pwd,
        name: data.name
    });
    testEntity.save(function (err, docs) {
        if (err) {
            console.log("err:" + err)
        } else {
            console.log(docs)
        };
    });

    var ajaxTest = {
        tips: "you are not alone"
    };
    res.send(ajaxTest);
});
module.exports = router;
