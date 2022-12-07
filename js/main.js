const puppeteer = require('puppeteer');

async function WebLink(link){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(link);

    const [el] = await page.$x('//*[@id="largeiteminfo_item_name"]');
    const txt = await el.getProperty('textContent');
    const Txt = await txt.jsonValue();


    // const [el2] = await page.$x('/html/body/div[1]/div[7]/div[2]/div[1]/div[4]/div/div[2]/div/div[5]/div[4]/div[2]/div[1]/div[1]/div/div[1]/div/span[2]');
    // const txt2 = await el2.getProperty('textContent');
    // const Txt2 = await txt2.jsonValue();

    console.log(Txt);

    browser.close();
}

WebLink('https://steamcommunity.com/market/listings/730/Recoil%20Case');
