var express = require('express');
var app = express();
var server = require('http').createServer(app);
var router = express.Router();
//var morgan = require('morgan');
var path = require('path');
var favicon = require('serve-favicon');

var index = require('./routes/index')(router);

app.engine('jade', require('jade').__express);
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/public'));
app.use('/js',  express.static(__dirname + '/js'));
app.use('/views',  express.static(__dirname + '/views'));
app.use('/bootstrap',  express.static(__dirname + '/bower_components/bootstrap'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.use(favicon(__dirname + '/public/favicon.ico'));

app.use('/', index);

app.all('/*', function(req, res, next){
    res.sendFile('/views/layout.html', { root: __dirname });
});

server.listen(process.env.PORT || 3000, '127.0.0.1', function(){
    console.log('Listening on '.concat(server.address().address.concat(':'.concat(server.address().port))));
});

module.exports = server;