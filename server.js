var express = require('express');
var app = express();
var router = express.Router();
var morgan = require('morgan');
var index = require('./routes/index')(router);
var path = require('path');



app.engine('jade', require('jade').__express);
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(__dirname));
//app.use(express.static(__dirname + '/public'));
//app.use('/bower_components',  express.static(__dirname));

app.use('/', index);

app.listen('3000', function(){
    console.log('Listening on 3000!');
});

module.exports = app;