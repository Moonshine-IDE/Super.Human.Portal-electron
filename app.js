const electron = require("electron");

const app = electron.app;

app.commandLine.appendSwitch('ignore-certificate-errors');
app.on("ready", function () {
  const mainWindow = new electron.BrowserWindow({
    webPreferences: {
      webviewTag: true
    }
  });

  mainWindow.webContents.session.clearCache();

  //ex: https://domino.moon.startcloud.com/Super.Human.Portal_Royale/js-debug/index.html
  mainWindow.loadURL("");
  mainWindow.on("ready-to-show", function () {
    mainWindow.show();
    mainWindow.focus();
  });

});
