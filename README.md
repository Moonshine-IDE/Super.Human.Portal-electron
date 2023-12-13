# Super.Human.Portal-electron

Electron wrapper for [Super.Human.Portal](https://github.com/Moonshine-IDE/Super.Human.Portal) or HCL Nomad.

## Requirements

* [Node JS](https://nodejs.org/en/download)
* An HCL Nomad server.  You can create a test server with [Super.Human.Installer](https://github.com/Moonshine-IDE/Super.Human.Installer).

## Configuring, building and running application

1. Clone this repository
2. Open a Terminal or Command Prompt to the cloned directory
3. Run `npm install`
3. Open `app.js` and populate `mainWindow.loadURL` (line 17) with your base Nomad or Super.Human.Portal URL.
4. Launch the application with: `npm start`
