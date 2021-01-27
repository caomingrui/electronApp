const { app, BrowserWindow } = require('electron');

function createWindow() {
    let win = new BrowserWindow({
        // 具体参数 http://www.niuguwen.cn/kaifashouce-cat-138-13802.html
        width: 400,
        height: 300,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile('./dist/index.html');
}

app.whenReady().then(createWindow);

