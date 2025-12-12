# Notion API 整合說明

> 本文件說明如何整合 Notion 作為內容管理系統（CMS）

---

## 系統架構

```
Notion Databases
    ├── Blog Database (存放 Blog 文章)
    └── Projects Database (存放專案與規劃)
        ↓
    Notion API
        ↓
wilsonchao.com (自動同步發布)
```

---

## Notion Databases

### Blog Database
- **用途**：管理所有 Blog 文章
- **ID**：見 `.env` 文件
- **欄位結構**：[ 待補充 - 包含哪些欄位？標題、內容、發布日期、標籤...？ ]

### Projects Database
- **用途**：管理專案與內容規劃
- **ID**：見 `.env` 文件
- **欄位結構**：[ 待補充 ]

---

## API 設定

### 環境變數
API credentials 存放在專案根目錄的 `.env` 文件中（不納入版本控制）：

```env
NOTION_TOKEN=your_notion_integration_token
NOTION_BLOG_DATABASE_ID=your_blog_database_id
NOTION_PROJECTS_DATABASE_ID=your_projects_database_id
```

**重要**：實際的 credentials 已設定完成，請勿分享或提交到 Git。

### .gitignore 設定
確保 `.env` 文件不會被提交：
```
.env
.env.local
```

---

## Blog 發布流程

### 目前流程（自動化）
1. 在 Notion Blog Database 中撰寫文章
2. 設定發布狀態
3. 透過 API 自動同步到 wilsonchao.com
4. 自動同步到 Telegram（透過 RSS）

### 未來整合方向
**Blog Agents 可以協助**：
- 在 Notion 中建立文章草稿
- 更新文章狀態
- 管理文章分類與標籤
- 追蹤發布進度

**需要的功能**：
- [ ] 讀取 Notion Database（查看現有文章）
- [ ] 建立新頁面（產出新文章草稿）
- [ ] 更新頁面（編輯文章內容）
- [ ] 管理屬性（標籤、分類、發布狀態）

---

## Projects Database 用途

### 目前用途
[ 待補充 - Projects Database 用來管理什麼？]

可能的用途：
- 內容企劃與規劃
- 專案追蹤
- 其他...

### 未來整合
可能的使用方式：
- Content-Framing Agent 在這裡管理月度內容計畫
- Project Manager 在這裡追蹤任務進度
- 儲存內容點子與發想

---

## API 使用範例

### 讀取 Blog Database
```javascript
// 範例：使用 Notion SDK 讀取 Blog 文章
const notion = require('@notionhq/client');
const client = new notion.Client({ auth: process.env.NOTION_TOKEN });

const response = await client.databases.query({
  database_id: process.env.NOTION_BLOG_DATABASE_ID,
  filter: {
    property: 'Status',
    status: { equals: 'Published' }
  }
});
```

### 建立新文章
```javascript
// 範例：建立新的 Blog 文章草稿
const response = await client.pages.create({
  parent: { database_id: process.env.NOTION_BLOG_DATABASE_ID },
  properties: {
    Title: {
      title: [{ text: { content: '文章標題' } }]
    },
    Status: {
      status: { name: 'Draft' }
    }
  },
  children: [
    {
      object: 'block',
      type: 'paragraph',
      paragraph: {
        rich_text: [{ type: 'text', text: { content: '文章內容...' } }]
      }
    }
  ]
});
```

---

## 給 Agents 的使用指引

### Blog-Writing Agent
當協助撰寫 Blog 文章時：
1. 可以先在本地產出草稿
2. 提交給 Leader 審核
3. Leader 批准後，手動或自動貼到 Notion Blog Database
4. 設定為 "Ready to Publish" 或直接發布

### Content-Framing Agent
可以整合 Projects Database 來：
- 管理月度內容計畫
- 追蹤內容點子的使用狀態
- 記錄內容成效數據

### 未來自動化可能性
- [ ] Blog Agent 直接寫入 Notion（需要開發或使用 Notion API）
- [ ] 從 Notion 自動讀取內容點子
- [ ] 自動追蹤已發布內容的成效

---

## 注意事項

### 安全性
- ✅ API Token 已妥善保存（不納入版本控制）
- ✅ Database IDs 只有 Leader 與必要的協作者知道
- ⚠️ 不要在公開的文件或對話中分享 credentials

### 備份
- Notion 本身有版本歷史
- 建議定期匯出重要內容作為備份
- 已發布的 Blog 文章也會在網站上保存

### 權限管理
- Notion Integration 的權限設定已完成
- 如需調整權限，請在 Notion 設定中修改

---

## 疑難排解

### 常見問題

**Q: API 連線失敗？**
- 檢查 `.env` 文件是否存在且格式正確
- 檢查 Token 是否有效
- 檢查 Database IDs 是否正確

**Q: 無法寫入 Notion？**
- 檢查 Integration 是否有寫入權限
- 檢查 Database 是否已分享給 Integration

**Q: 資料同步延遲？**
- Notion API 可能有延遲（通常幾秒到幾分鐘）
- 網站同步機制可能有自己的排程

---

## 參考資源

- [Notion API 官方文件](https://developers.notion.com/)
- [Notion SDK for JavaScript](https://github.com/makenotion/notion-sdk-js)
- 內部文件：`content-hub/monthly-plan.md`（可整合 Notion Projects Database）

---

**最後更新**：2025-12-12
**維護者**：Social Manager（文件維護）、Leader（實際設定）
**狀態**：Notion 整合已設定完成，目前為自動同步模式
