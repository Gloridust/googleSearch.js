const axios = require('axios');
const cheerio = require('cheerio');

async function googleSearch(query) {
    try {
        // 构建搜索 URL
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;

        // 发送 GET 请求获取搜索结果页面的 HTML
        const { data } = await axios.get(searchUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });

        // 解析 HTML
        const $ = cheerio.load(data);
        const results = [];

        // 提取搜索结果
        $('#search .g').each((index, element) => {
            const title = $(element).find('h3').text();
            const link = $(element).find('a').attr('href');
            const snippet = $(element).find('.aCOpRe').text();
            if (title && link) {
                results.push({ title, link, snippet });
            }
        });

        return results;
    } catch (error) {
        console.error('Error fetching search results:', error);
        return [];
    }
}

// 测试搜索功能
googleSearch('puppeteer').then(results => {
    console.log(results);
}).catch(error => {
    console.error(error);
});
