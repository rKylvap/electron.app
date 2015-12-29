
var electron = require('electron');
var app = electron.app;
var ipcMain = require('electron').ipcMain;
var BrowserWindow = electron.BrowserWindow;
var mainWindow = null;

app.on('window-all-closed', function(){

    //in the MAC OS
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('ready', function(){
    mainWindow = new BrowserWindow({ width: 800, height: 600 });
    mainWindow.loadUrl('file://' + __dirname + '/index.html');
    mainWindow.openDevTools();


    app.on('closed', function(){
        mainWindow = null;
    });
});

ipcMain.on('online-status-changed', function(event, status){
    console.log('Current connection status: >> ' + status);
});
