const puppeteer = require('puppeteer');

async function WebLink(link){
    // {headless: false } in launch()
    var browser = await puppeteer.launch(); 
    const page = await browser.newPage();
    await page.goto(link);

    const [el] = await page.$x('/html/body/div[1]/div[7]/div[2]/div[1]/div[4]/div/div[2]/div/div[1]/div[1]/img');
    const txt = await el.getProperty('src');
    const Txt = await txt.jsonValue();

    // const grabTxt = await page.evaluate(() => {
    //     const txt = document.querySelector(".hover_item_name");
    //     return txt.innerHTML;
    // });

    // console.log(grabTxt);

    // const [el2] = await page.$x('/html/body/div[1]/div[7]/div[2]/div[1]/div[4]/div/div[2]/div/div[5]/div[4]/div[2]/div[1]/div[1]/div/div[1]/div/span[2]');
    // const txt2 = await el2.getProperty('textContent');
    // const Txt2 = await txt2.jsonValue();

    browser.close(Txt);
}

WebLink('https://steamcommunity.com/market/listings/730/Recoil%20Case');