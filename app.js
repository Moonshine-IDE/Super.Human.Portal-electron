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

  // Nomad example:  https://nomad.myserver.com:9443/nomad
  // Super.Human.Portal example: https://domino.demo.startcloud.com/Super.Human.Portal/js-release/index.html
  mainWindow.loadURL("https://nomad.REPLACEME:9443/nomad");
  mainWindow.on("ready-to-show", function () {
    mainWindow.show();
    mainWindow.focus();
  });

});
