const puppeteer = require("puppeteer");

const scrapeAmazon = async (url) => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle2" });

    const data = await page.evaluate(() => ({
        title: document.querySelector("#productTitle")?.innerText.trim(),
        price: document.querySelector(".a-price .a-offscreen")?.innerText,
    }));

    await browser.close();
    return data;
};

module.exports = { scrapeAmazon };