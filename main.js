
var electron = require('electron');
var path = require('path');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var server = require('./server');
var mainWindow = null;

app.on('window-all-closed', function(){

    //in the MAC OS
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('ready', function(){
    mainWindow = new BrowserWindow({ width: 800, height: 600 });
    mainWindow.loadUrl(path.join('file://', __dirname, 'views/layout.html'));
    mainWindow.openDevTools();

    app.on('closed', function(){
        mainWindow = null;
    });
});
