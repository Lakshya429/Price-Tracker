const cron = require("node-cron");
const { Price } = require("./database/models");
const { scrapeAmazon } = require("./scrapers/amazonScraper");
const { sendEmail } = require("./utils/emailAlert");

cron.schedule("0 */6 * * *", async () => {
    const trackedProducts = await Price.find();
    for (const product of trackedProducts) {
        const data = await scrapeAmazon(product.url);
        if (data.price !== product.price) {
            sendEmail(product.email, data.title, data.price, product.url);
            await Price.create({ ...product, price: data.price });
        }
    }
});
