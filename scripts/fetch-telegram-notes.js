/**
 * 從 Telegram 頻道抓取最近的訊息作為靈感來源
 *
 * 使用 Telegram Bot API 直接抓取頻道訊息
 * 比抓取網頁更可靠、更結構化
 */

require('dotenv').config();
const https = require('https');
const fs = require('fs');
const path = require('path');

// ==================== 設定 ====================
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHANNEL_ID = process.env.TELEGRAM_CHANNEL_ID;
const MESSAGE_LIMIT = 50; // 抓取最近 50 則訊息

// ==================== Telegram API 函數 ====================

/**
 * 使用 Telegram Bot API 獲取頻道訊息
 */
function getChannelMessages(limit = MESSAGE_LIMIT) {
    return new Promise((resolve, reject) => {
        const url = `https://api.telegram.org/bot${BOT_TOKEN}/getUpdates?limit=${limit}`;

        https.get(url, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                try {
                    const result = JSON.parse(data);
                    if (result.ok) {
                        resolve(result.result);
                    } else {
                        reject(new Error(`Telegram API Error: ${result.description}`));
                    }
                } catch (error) {
                    reject(error);
                }
            });
        }).on('error', (error) => {
            reject(error);
        });
    });
}

/**
 * 獲取頻道中的最近訊息（使用 getChat API）
 * 注意：標準 Bot API 無法直接讀取頻道歷史訊息
 * 需要使用 MTProto 或者 Bot 必須是頻道管理員
 */
async function fetchRecentMessages() {
    console.log('正在從 Telegram 頻道抓取訊息...\n');

    try {
        // 方法 1: 嘗試使用 getUpdates（只能獲取 bot 收到的訊息）
        const updates = await getChannelMessages();

        // 過濾出來自指定頻道的訊息
        const channelMessages = updates
            .filter(update => {
                const message = update.channel_post || update.message;
                return message && message.chat.id.toString() === CHANNEL_ID;
            })
            .map(update => {
                const message = update.channel_post || update.message;
                return {
                    message_id: message.message_id,
                    date: new Date(message.date * 1000),
                    text: message.text || message.caption || '',
                    has_media: !!(message.photo || message.video || message.document),
                    forward_from: message.forward_from ? message.forward_from.username : null
                };
            })
            .sort((a, b) => b.date - a.date); // 最新的在前

        return channelMessages;

    } catch (error) {
        console.error('抓取訊息時發生錯誤:', error.message);

        // 如果 API 失敗，返回提示訊息
        console.log('\n⚠️  無法直接從 Telegram API 抓取頻道歷史訊息');
        console.log('💡 建議方案：');
        console.log('   1. 確保 Bot 是頻道管理員');
        console.log('   2. 或使用 murmur.wilsonchao.com（Telegram 同步網頁）');
        console.log('   3. 或手動複製最近的筆記內容');

        return [];
    }
}

/**
 * 格式化訊息為 Markdown
 */
function formatMessagesToMarkdown(messages) {
    let markdown = `# Telegram 頻道筆記 - ${new Date().toLocaleDateString('zh-TW')}\n\n`;
    markdown += `> 從 Telegram 頻道抓取的最近 ${messages.length} 則訊息\n\n`;
    markdown += `---\n\n`;

    messages.forEach((msg, index) => {
        markdown += `## 筆記 #${index + 1} - ${msg.date.toLocaleDateString('zh-TW')} ${msg.date.toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit' })}\n\n`;

        if (msg.text) {
            markdown += `${msg.text}\n\n`;
        }

        if (msg.has_media) {
            markdown += `_[包含圖片/影片]_\n\n`;
        }

        if (msg.forward_from) {
            markdown += `_轉發自: @${msg.forward_from}_\n\n`;
        }

        markdown += `---\n\n`;
    });

    return markdown;
}

/**
 * 儲存訊息到檔案
 */
function saveMessages(messages) {
    const outputDir = path.join(__dirname, '..', 'content-hub', 'telegram-notes');

    // 確保資料夾存在
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // 產生檔案名稱（日期）
    const today = new Date().toISOString().split('T')[0];
    const filename = path.join(outputDir, `${today}-telegram-notes.md`);

    // 格式化並儲存
    const markdown = formatMessagesToMarkdown(messages);
    fs.writeFileSync(filename, markdown, 'utf-8');

    console.log(`\n✅ 訊息已儲存到: ${filename}`);
    console.log(`📊 總共 ${messages.length} 則訊息\n`);

    return filename;
}

/**
 * 簡化版：提供手動輸入的選項
 */
function provideManualOption() {
    console.log('\n📝 手動輸入模式');
    console.log('================\n');
    console.log('由於 Telegram Bot API 限制，建議使用以下方式獲取筆記：\n');
    console.log('方法 1: 從 murmur.wilsonchao.com 複製最近的筆記');
    console.log('方法 2: 直接從 Telegram App 複製訊息');
    console.log('方法 3: 確保 Bot 是頻道管理員後重試\n');
    console.log('然後使用 /inspire 指令，並貼上筆記內容給 Inspiration Agent 分析。\n');
}

// ==================== 主程式 ====================

async function main() {
    console.log('🚀 Telegram 筆記抓取器\n');
    console.log(`📡 頻道 ID: ${CHANNEL_ID}`);
    console.log(`🤖 Bot Token: ${BOT_TOKEN.substring(0, 20)}...\n`);

    const messages = await fetchRecentMessages();

    if (messages.length > 0) {
        saveMessages(messages);
        console.log('🎉 完成！可以使用 /inspire 指令來分析這些筆記。');
    } else {
        provideManualOption();
    }
}

// 執行主程式
main().catch(error => {
    console.error('執行時發生錯誤:', error);
    process.exit(1);
});
