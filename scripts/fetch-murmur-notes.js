/**
 * 從 murmur.wilsonchao.com 抓取最近的筆記
 *
 * murmur.wilsonchao.com 是 Telegram 頻道的網頁同步版本
 * 比直接使用 Telegram Bot API 更簡單可靠
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// ==================== 設定 ====================
const MURMUR_URL = 'https://murmur.wilsonchao.com';

// ==================== 輔助函數 ====================

/**
 * 抓取網頁內容
 */
function fetchWebPage(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                resolve(data);
            });
        }).on('error', (error) => {
            reject(error);
        });
    });
}

/**
 * 簡單的 HTML 解析 - 提取文字內容
 * （實際使用時可能需要更複雜的解析）
 */
function extractTextContent(html) {
    // 移除 HTML 標籤
    let text = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    text = text.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
    text = text.replace(/<[^>]+>/g, '\n');

    // 解碼 HTML entities
    text = text.replace(/&nbsp;/g, ' ');
    text = text.replace(/&amp;/g, '&');
    text = text.replace(/&lt;/g, '<');
    text = text.replace(/&gt;/g, '>');
    text = text.replace(/&quot;/g, '"');

    // 清理多餘空白
    text = text.replace(/\n\s*\n\s*\n/g, '\n\n');
    text = text.trim();

    return text;
}

/**
 * 儲存筆記到檔案
 */
function saveNotes(content) {
    const outputDir = path.join(__dirname, '..', 'content-hub', 'murmur-notes');

    // 確保資料夾存在
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // 產生檔案名稱（日期）
    const today = new Date().toISOString().split('T')[0];
    const filename = path.join(outputDir, `${today}-murmur-notes.md`);

    // 格式化內容
    const markdown = `# Murmur 筆記 - ${new Date().toLocaleDateString('zh-TW')}\n\n`;
    const fullContent = markdown + '> 從 murmur.wilsonchao.com 抓取的內容\n\n---\n\n' + content;

    fs.writeFileSync(filename, fullContent, 'utf-8');

    console.log(`\n✅ 筆記已儲存到: ${filename}`);

    return filename;
}

// ==================== 主程式 ====================

async function main() {
    console.log('🚀 Murmur 筆記抓取器\n');
    console.log(`📡 正在從 ${MURMUR_URL} 抓取內容...\n`);

    try {
        const html = await fetchWebPage(MURMUR_URL);
        const textContent = extractTextContent(html);

        if (textContent.length > 0) {
            const savedFile = saveNotes(textContent);
            console.log(`📊 抓取字數: ${textContent.length} 字\n`);
            console.log('🎉 完成！\n');
            console.log('📝 接下來你可以：');
            console.log('   1. 檢視抓取的內容: ' + savedFile);
            console.log('   2. 使用 /inspire 指令來分析這些筆記');
            console.log('   3. 或直接提供特定筆記片段給 Inspiration Agent\n');
        } else {
            console.log('⚠️  未能抓取到內容，請檢查網址是否正確。\n');
        }

    } catch (error) {
        console.error('❌ 抓取時發生錯誤:', error.message);
        console.log('\n💡 替代方案：');
        console.log('   - 手動從 Telegram App 複製最近的筆記');
        console.log('   - 然後使用 /inspire 指令並貼上內容\n');
    }
}

// 執行主程式
main().catch(error => {
    console.error('執行時發生錯誤:', error);
    process.exit(1);
});
