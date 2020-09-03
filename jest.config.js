module.exports = {
    preset: "jest-puppeteer",
    globals: {
        URL: "https://google.com"
    },
    testMatch: [
        "**/test/**/*.test.js"
    ],
    verbose: true,
    reporters: [ "default", "jest-junit" ]
}
