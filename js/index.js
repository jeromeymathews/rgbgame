"use strict";
const electron = require("electron");
const BrowserWindow = electron.BrowserWindow;
const app = electron.app;
const Menu = electron.Menu;
const MenuItem = electron.MenuItem;
const windowStateKeeper = require("electron-window-state");
const path = require("path");
const url = require("url");

let window;

function createWindow(){
  let mainWindowState = windowStateKeeper({
    defaultHeight: 800,
    defaultWidth: 1200
  });

  window = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
    x: mainWindowState.x,
    y: mainWindowState.y,
    width: mainWindowState.width,
    height: mainWindowState.height
  });

  mainWindowState.manage(window);
  window.loadURL(url.format({
    pathname: path.join(__dirname, "../html/index.html"),
    protocol: "file",
    slashes: true
  }));

  window.on("closed", () => {
    window = null;
  });
}

app.on("ready", createWindow);
app.on("window-all-closed", () =>{
  if(process.platform !== "darwin"){
    app.quit();
  }
});