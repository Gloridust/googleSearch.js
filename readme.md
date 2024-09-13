# Google Search Scraper

`googleSearch.js` 是一个基于 Node.js 的 Google 搜索结果抓取器。它使用 `axios` 来发送 HTTP 请求，并使用 `cheerio` 来解析 HTML，提取搜索结果的标题、链接和摘要。

## 特性

- 支持通过关键词进行 Google 搜索
- 提取搜索结果的标题、链接和摘要
- 支持分页，获取不同页码的搜索结果

## 安装

1. 克隆仓库到本地：

   ```bash
   git clone https://github.com/Gloridust/googleSearch.js.git
   cd googleSearch.js
   ```

2. 安装依赖：

   ```bash
   npm install
   ```

## 使用

在 `googleSearch.js` 文件中定义了 `googleSearch` 函数，可以通过调用该函数来进行 Google 搜索。

### 示例代码

```javascript
const googleSearch = require('./googleSearch');

googleSearch('puppeteer', 1).then(results => {
    console.log(results);
}).catch(error => {
    console.error(error);
});
```

### 函数说明

#### `googleSearch(query, page)`

- `query` (字符串): 要搜索的关键词
- `page` (数字, 可选): 要获取的搜索结果页码，默认为第 1 页

#### 返回值

返回一个包含搜索结果的数组，每个结果包含以下字段：

- `title` (字符串): 搜索结果的标题
- `link` (字符串): 搜索结果的链接
- `snippet` (字符串): 搜索结果的摘要

### 示例输出

```json
[
  {
    "title": "Ethan Zou (Gloridust)",
    "link": "https://gloridust.xyz/",
    "snippet": "中文/英语/法语（学习中） | 大数据专业学生| 前端/后端/移动开发/提示词工程师｜ 学习React/NextJS, Flutter/Python, 机器学习和大数据| YGeeker 联合创始人."
  },
  {
    "title": "Gloridust (Gloridust)",
    "link": "https://github.com/Gloridust",
    "snippet": "A Étudiants, Co-founder of YGeeker. Gloridust has 66 repositories available. Follow their code on GitHub."
  },
  {
    "title": "Gloridust/Gloridust",
    "link": "https://github.com/Gloridust/Gloridust",
    "snippet": "Learning React and Python. Looking to collaborate on front-end development projects. 🏗️ Currently working at YGeeker as a Co-founder. You can reach me ..."
  },
  {
    "title": "Puppies,Codes,Distance. - 辉晨Gloridust",
    "link": "https://www.kkbox.com/tw/tc/song/GppGwtz--IKc0tBNiL",
    "snippet": "辉晨Gloridust的歌曲「Puppies,Codes,Distance.」在這裡，快打開KKBOX 盡情收聽。"
  },
  {
    "title": "关于我 - Ethan 的博客",
    "link": "https://gloridust.xyz/about",
    "snippet": "关于我. 大家好，我是Ethan Zou (Gloridust)，一名充满热情的全栈开发者和大数据专业的学生。 我的技能. 前端开发：React, Next.js, Flutter; 后端开发：Python, Node.js ..."
  },
  {
    "title": "Gloridust 的收藏文章",
    "link": "https://sspai.com/u/gloridust/favorites",
    "snippet": "YGeeker 联合创始人、大学生、程序员. 10 正在关注 3 关注者. 获得徽章. 0. 创作文章. 2篇. 文章阅读量. 5721. 获得充电. 10. 成为少数派. 167天."
  },
]
```

## 注意事项

- 频繁的自动化访问可能会触发 Google 的反爬虫机制，请合理使用。
- 仅供学习交流用途。

## 许可证

该项目使用 MIT 许可证。详见 [LICENSE](LICENSE) 文件。
