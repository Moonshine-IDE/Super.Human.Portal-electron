# Super.Human.Portal-electron

## Configuring, building and running application

1. If you do not have a Domino server with Nomad Web 1.0.9 or later installed, then use [Super.Human.Installer](https://github.com/Moonshine-IDE/Super.Human.Installer/releases/tag/0.8.21-dev) to install a local Domino instance first. If you already have a Domino server with Nomad Web, you can skip this step.
2. If you do not have Node.JS installed on your computer yet, download and install the LTS version from [https://nodejs.org/en/download](https://nodejs.org/en/download)
3. Clone this GitHub repo or use the Code->Download button to store the files on your computer.
4. Open a Terminal or command prompt and Change Directory to the location of the downloaded code in step 3
5. In the root folder of the application, run `npm install`
6. Provide the starting URL of your Domino server Nomad instance in app.js, line 16
7. Run the application using `npm start`
