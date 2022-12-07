const puppeteer = require('puppeteer');

async function WebLink(link){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(link);

    const [el] = await page.$x('//*[@id="global_actions"]/a/img');
    const src = await el.getProperty('src');
    const srcTxt = src.jsonValue();

    console.log({srcTxt});
}

WebLink('https://store.steampowered.com/');