module.exports = {
    launch: {
        headless: true,
        slowMo: false,
        devtools: true,
        args: [
          "--no-sandbox",
          "--disable-gpu",
        ],
        executablePath: "/usr/bin/chromium-browser"
    }
}
