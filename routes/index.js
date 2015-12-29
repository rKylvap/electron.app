//var express = require('express');
//var router = express.Router();

module.exports = function(router){
    router.get('/', function(req, res){
        res.render('./../index', {title: 'Welcome Home!'});
    });

    return router;
}
