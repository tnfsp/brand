/**
 * 調試腳本：查看 Notion Database 的實際欄位結構
 */

const { Client } = require('@notionhq/client');
require('dotenv').config();

const notion = new Client({
  auth: process.env.NOTION_BRAND_TOKEN || process.env.NOTION_TOKEN,
});

const IG_DATABASE_ID = 'a5f5e4b12f9945b599aa1a3f4aff6454';

async function debugStructure() {
  try {
    console.log('🔍 讀取 Notion Database 結構...\n');

    // 1. 讀取 database 資訊
    const database = await notion.databases.retrieve({
      database_id: IG_DATABASE_ID,
    });

    console.log('📋 Database 資訊：');
    console.log('- 標題:', database.title[0]?.plain_text || '(無標題)');
    console.log('- ID:', database.id);
    console.log('\n📝 Properties（欄位）：\n');

    // 列出所有欄位
    for (const [key, value] of Object.entries(database.properties)) {
      console.log(`  - ${key}: ${value.type}`);
    }

    // 2. 讀取第一筆資料作為範例
    console.log('\n\n📄 第一筆資料範例：\n');
    const response = await notion.databases.query({
      database_id: IG_DATABASE_ID,
      page_size: 1,
    });

    if (response.results.length > 0) {
      const page = response.results[0];
      console.log('Properties 內容：\n');

      for (const [key, value] of Object.entries(page.properties)) {
        console.log(`  ${key}:`);
        console.log(`    - type: ${value.type}`);
        console.log(`    - value:`, JSON.stringify(value, null, 2));
        console.log('');
      }
    }

  } catch (error) {
    console.error('❌ 錯誤：', error.message);
  }
}

debugStructure();
