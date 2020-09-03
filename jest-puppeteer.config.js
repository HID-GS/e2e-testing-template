require('module-alias/register');
const chromePaths = require('chrome-paths');

module.exports = {
    launch: {
        headless: true,
        slowMo: false,
        devtools: true,
        args: [
          "--no-sandbox",
          "--disable-gpu",
        ],
        executablePath: chromePaths.chromium
    }
}
