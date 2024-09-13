const puppeteer = require('puppeteer');

async function googleSearch(query) {
    const browser = await puppeteer.launch({ headless: false }); // 有头模式，可以改为 headless: true
    const page = await browser.newPage();

    // 设置用户代理，防止被识别为机器人
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
    
    // 打开Google主页
    await page.goto('https://www.google.com', { waitUntil: 'networkidle2' });

    // 确保页面加载完全，并且搜索框存在
    const searchBoxSelector = 'input[name="q"]';
    await page.waitForSelector(searchBoxSelector, { timeout: 20000 });

    // 输入搜索查询
    await page.type(searchBoxSelector, query);
    await page.keyboard.press('Enter');

    // 等待搜索结果页面加载
    await page.waitForSelector('#search', { timeout: 20000 });

    // 提取搜索结果
    const results = await page.evaluate(() => {
        const items = [];
        const searchResults = document.querySelectorAll('#search .g');
        searchResults.forEach(result => {
            const title = result.querySelector('h3') ? result.querySelector('h3').innerText : null;
            const link = result.querySelector('a') ? result.querySelector('a').href : null;
            const snippet = result.querySelector('.aCOpRe') ? result.querySelector('.aCOpRe').innerText : null;
            if (title && link) {
                items.push({ title, link, snippet });
            }
        });
        return items;
    });

    await browser.close();
    return results;
}

// 测试搜索功能
googleSearch('puppeteer').then(results => {
    console.log(results);
}).catch(error => {
    console.error(error);
});
