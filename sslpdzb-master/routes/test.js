/**
 * Created by Administrator on 2016/10/18.
 */
var express = require('express');
//var db = require('./public/server/mongoose');
var router = express.Router();


router.get('/test', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/test', function(req, res, next){

});


module.exports = router;