//let chromecast = require('electron-chromecast');
const { app, BrowserWindow } = require('electron');
const path = require('path');
let mainWindow;
const { setMainMenu } = require('./main-menu.js');

app.on('ready', () =>  {
  mainWindow = new BrowserWindow();
  mainWindow.loadURL(path.join('file://', __dirname, 'index.html'));
  mainWindow.on('ready-to-show', () => {
    mainWindow.show();
  });
  setMainMenu();
});