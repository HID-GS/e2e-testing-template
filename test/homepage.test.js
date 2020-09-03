const timeout = 10000;

beforeAll(async () => {
    await page.goto(URL, { waitUntil: "domcontentloaded" });
});

describe("Test title of the homepage", () => {
    test("Title of the page", async () => {
        const title = await page.title();

        expect(title).toBe("Google");
    }, timeout);

});
