/**
 * 從 Notion IG Content Database 讀取內容並同步到 ideas-pool.md
 *
 * 使用方式：node scripts/sync-notion-ig.js
 */

const { Client } = require('@notionhq/client');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// 初始化 Notion client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const IG_DATABASE_ID = 'a5f5e4b12f9945b599aa1a3f4aff6454';

async function syncNotionIGContent() {
  try {
    console.log('🔄 開始從 Notion 讀取 IG 內容...');

    // 查詢 database
    const response = await notion.databases.query({
      database_id: IG_DATABASE_ID,
      sorts: [
        {
          timestamp: 'created_time',
          direction: 'descending',
        },
      ],
    });

    console.log(`✅ 找到 ${response.results.length} 筆內容`);

    // 解析內容
    const ideas = response.results.map(page => {
      const properties = page.properties;

      return {
        id: page.id,
        title: getPlainText(properties['主題名稱']),
        status: getStatus(properties.Status),
        category: getSelect(properties['發文主題']),
        platform: getMultiSelect(properties.Platform),
        needDiscussion: properties['需要討論']?.checkbox || false,
        date: properties.Date?.date?.start || null,
        content: '', // 需要單獨讀取 page content
        createdTime: page.created_time,
        url: page.url,
      };
    });

    // 輸出到 ideas-pool.md
    await updateIdeasPool(ideas);

    console.log('✅ 同步完成！');
  } catch (error) {
    console.error('❌ 錯誤：', error.message);
    console.error('詳細資訊：', error);
  }
}

// 輔助函數：取得純文字
function getPlainText(property) {
  if (!property) return '';
  if (property.title && property.title.length > 0) {
    return property.title[0].plain_text;
  }
  if (property.rich_text && property.rich_text.length > 0) {
    return property.rich_text[0].plain_text;
  }
  return '';
}

// 輔助函數：取得 select 欄位
function getSelect(property) {
  if (!property || !property.select) return '';
  return property.select.name;
}

// 輔助函數：取得 status 欄位
function getStatus(property) {
  if (!property || !property.status) return '';
  return property.status.name;
}

// 輔助函數：取得 multi_select 欄位
function getMultiSelect(property) {
  if (!property || !property.multi_select) return [];
  return property.multi_select.map(item => item.name);
}

// 更新 ideas-pool.md
async function updateIdeasPool(ideas) {
  const poolPath = path.join(__dirname, '../content-hub/ideas-pool.md');

  // 讀取現有的 ideas-pool.md
  let existingContent = '';
  if (fs.existsSync(poolPath)) {
    existingContent = fs.readFileSync(poolPath, 'utf-8');
  }

  // 分類內容（按照 Platform 的三大支柱分類）
  const categorized = {
    '醫學': [],
    '故事': [],
    '成長': [],
    '未分類': [],
  };

  ideas.forEach(idea => {
    // 從 Platform 判斷屬於哪個支柱
    let pillar = '未分類';

    if (idea.platform && idea.platform.length > 0) {
      const platformStr = idea.platform.join(' ');
      if (platformStr.includes('醫學')) {
        pillar = '醫學';
      } else if (platformStr.includes('故事')) {
        pillar = '故事';
      } else if (platformStr.includes('成長')) {
        pillar = '成長';
      }
    }

    categorized[pillar].push({
      title: idea.title || '(無標題)',
      status: idea.status || '待使用',
      platform: idea.platform || [],
      category: idea.category, // 保留發文主題作為次分類
      needDiscussion: idea.needDiscussion,
      date: idea.date,
      url: idea.url,
      createdTime: new Date(idea.createdTime).toLocaleDateString('zh-TW'),
    });
  });

  // 產生新的內容（附加在現有內容之後）
  let newSection = '\n\n---\n\n## 從 Notion 同步的內容\n\n';
  newSection += `> 最後同步時間：${new Date().toLocaleString('zh-TW')}\n`;
  newSection += `> 來源：[Notion IG Content Database](https://tnfsp.notion.site/a5f5e4b12f9945b599aa1a3f4aff6454)\n\n`;

  for (const [pillar, items] of Object.entries(categorized)) {
    if (items.length === 0) continue;

    newSection += `### ${pillar}（${items.length} 筆）\n\n`;
    items.forEach(item => {
      newSection += `#### ${item.title}\n`;
      newSection += `- **支柱**：${pillar}\n`;

      if (item.category) {
        newSection += `- **發文主題**：${item.category}\n`;
      }

      newSection += `- **狀態**：${item.status}\n`;

      if (item.platform && item.platform.length > 0) {
        newSection += `- **平台標記**：${item.platform.join(', ')}\n`;
      }

      if (item.date) {
        newSection += `- **預計發布日期**：${item.date}\n`;
      }

      if (item.needDiscussion) {
        newSection += `- **需要討論**：✓\n`;
      }

      newSection += `- **建立日期**：${item.createdTime}\n`;
      newSection += `- **Notion 連結**：[查看詳細內容](${item.url})\n\n`;
    });
  }

  // 檢查是否已有同步區塊，如有則替換
  const syncMarker = '## 從 Notion 同步的內容';
  if (existingContent.includes(syncMarker)) {
    const parts = existingContent.split(syncMarker);
    existingContent = parts[0];
  }

  // 寫入檔案
  const finalContent = existingContent + newSection;
  fs.writeFileSync(poolPath, finalContent, 'utf-8');

  console.log(`📝 已更新 ideas-pool.md，新增 ${ideas.length} 個點子`);
}

// 執行
syncNotionIGContent();
