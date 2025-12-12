# Session Log - 某某醫師 / Wilson Chao 個人品牌專案

這個文件記錄每次 CLI 對話的進度、決策、變更和待辦事項，確保專案可以持續接力完成。

---

## 📋 如何使用這個 Log

### 每次 Session 開始前
1. 閱讀最新的 Session 記錄
2. 檢查「待辦事項」和「下次重點」
3. 確認目前專案狀態

### 每次 Session 結束時
1. Social Project Manager 記錄本次討論內容
2. 更新待辦事項狀態
3. 標註下次對話的重點

---

## Session #001 - 2025-12-12

### 📌 本次目標
建立專案基本框架與協作規則

### 💬 討論內容

#### 1. 專案定位調整
- **原始想法**：IG 貼文助手
- **調整後**：某某醫師 / Wilson Chao 個人品牌整體經營系統
- **原因**：IG 只是品牌生態的一部分，需要更大的格局

#### 2. 品牌現況理解
Leader 提供了詳細的交班資料，包含：
- 品牌初衷：邊學習邊記錄，交志同道合的朋友
- 品牌階段：從「可辨識」走向「可信任」
- 重新定位方向：網站重啟、資訊與生活化權重調整、發展線下社群
- 內容風格：溫柔但有立場、從醫療現場談人性（參考《沒有姓名的值班機器》）
- 視覺系統：白底灰字 / 藍底白字、已有 Canva 模板

#### 3. 角色與協作框架確立
- **Leader（你）**：最終決策權、品牌把關、目標設定
- **Social Project Manager（AI）**：提案、執行、協調各 Agent
- **未來 Agent 團隊**：IG Agent、Website Agent、Repurpose Agent、Analytics Agent、Community Agent

#### 4. 專案結構設計
```
wilsonchao-brand/
├── claude.md                # AI 協作框架
├── SESSION-LOG.md           # 本文件：對話記錄
├── brand-consensus.md       # 品牌共識（待建立）
├── agents/                  # 各專門 Agent
├── content-hub/             # 跨渠道內容中心
└── resources/               # 共用資源
```

### ✅ 完成事項
- [x] 建立 `claude.md` - AI 協作框架文件
- [x] 定義角色分工與工作流程
- [x] 設計專案文件結構
- [x] 列出四個關鍵決策問題
- [x] 建立 SESSION-LOG.md 系統

### 📝 檔案變更記錄
| 檔案 | 動作 | 說明 |
|------|------|------|
| `claude.md` | 新增/修改 | 建立 AI 協作框架，定義專案為整體品牌系統 |
| `SESSION-LOG.md` | 新增 | 本文件，記錄每次對話 |

### ⏭️ 待辦事項

#### 高優先級（下次 Session）
- [ ] **Leader 審核 `claude.md`**：確認框架是否符合期待
- [ ] **Leader 回答四個關鍵決策問題**：
  1. 內容比例（資訊 vs 生活化）
  2. 渠道優先順序與角色定位
  3. 時間投入與節奏
  4. 第一個要建立的 Agent（建議：IG Agent）

#### 中優先級（待批准後執行）
- [ ] 整理品牌共識文件（從交班資料）
- [ ] 建立第一個 Agent（可能是 IG Agent）
- [ ] 設計內容再利用 SOP

#### 低優先級（長期）
- [ ] 建立其他專門 Agent
- [ ] 完善數據追蹤系統

### 🎯 下次重點

1. **等待 Leader 回饋**：
   - 專案框架是否 OK？
   - 四個決策問題的答案
   - 想先從哪個部分開始？

2. **可能的下一步**（依 Leader 決策）：
   - 方案 A：直接建立 IG Agent（如果 Leader 確認要先做 IG）
   - 方案 B：先整理品牌共識文件（如果需要更多討論）
   - 方案 C：建立內容再利用流程（如果這是優先痛點）

### 💡 待確認事項
- [ ] IG 帳號 @momobear_doctor 的現況（無法直接訪問，需要 Leader 提供）
- [ ] 現有 Canva 模板的數量與類型
- [ ] 目前發文頻率與最花時間的環節

### 📌 重要提醒
- Social Project Manager 已設定「先提案後執行」原則
- 未來會有 Subagent 團隊，本次先建立基礎框架
- 每次 Session 都要更新這個 log

---

## Session #002 - 2025-12-12

### 📌 本次目標
建立完整的 AI Agent 系統架構，並初始化 Git repository

### 💬 討論內容

#### 1. Agent 架構重新設計
經過討論，決定採用三層級 Agent 架構：

**Level 0: Leader（Wilson）**
- 最終決策權、品牌把關

**Level 1: 策略與協調層**
- **Social Manager**：品牌策略顧問，討論整體方向
- **Project Manager**：專案協調者，指揮執行層 Agents

**Level 2: 執行層 Agents**
- **Content-Framing Agent**：內容框架與主題發想
- **IG Agents**：IG-Ideation, IG-Copywriting, IG-Visual, Content-Creation
- **Blog Agents**：Blog-Ideation, Blog-Writing, Blog-Editing（未來建立）
- **其他支援 Agents**：Brand-Strategy, Reflection（未來建立）

#### 2. 關鍵決策確認
- **目標優先順序**：D (建立系統) > B (穩定產出) > C (內容品質) > A (降低門檻)
- **產出目標**：IG 和 Blog 各一個月至少 1 篇
- **時間投入**：每週 5-10 小時
- **渠道優先級**：IG > Blog
- **內容三大支柱**：醫學（藍色）、故事（橘色A）、個人成長（橘色B）
- **Agent 分離方式**：Social Manager 與 Project Manager 獨立對話（使用 Claude Projects）
- **本對話定位**：作為 Social Manager（策略討論）

#### 3. Notion CMS 整合
- 確認使用 Notion 作為 Blog CMS
- 已有 Notion API credentials（已記錄到文件，但實際 credentials 不納入版本控制）
- Blog Database 與 Projects Database 已設定

#### 4. Session Log 機制建立
- 在 CLAUDE.md 中加入 CLI 協作規範
- 每次使用 CLI 都要記錄變更與待辦事項
- 方便團隊成員接力完成專案

### ✅ 完成事項
- [x] 設計三層級 Agent 架構
- [x] 建立專案文件結構（資料夾）
- [x] 撰寫 Social Manager agent-prompt.md
- [x] 撰寫 Project Manager agent-prompt.md
- [x] 建立品牌核心文件（brand-identity.md, content-pillars.md, visual-guidelines.md）
- [x] 建立內容點子庫模板（ideas-pool.md）
- [x] 撰寫 Content-Framing Agent prompt
- [x] 撰寫完整 IG Agents 系列 prompts：
  - IG-Ideation Agent
  - IG-Copywriting Agent
  - IG-Visual Agent
  - Content-Creation Agent
- [x] 建立 Notion 整合說明文件（notion-integration.md）
- [x] 更新 README.md（專案總覽）
- [x] 更新 CLAUDE.md（加入 Session Log 機制）
- [x] 建立 .gitignore（保護敏感資訊）
- [x] 初始化 Git repository
- [x] Push 到 GitHub (https://github.com/tnfsp/brand)

### 📝 檔案變更記錄

#### 新增檔案
- `README.md` - 專案總覽與 Agent 架構說明
- `.gitignore` - Git 版本控制排除規則
- **Agents（策略與協調層）**：
  - `agents/social-manager/agent-prompt.md` - Social Manager 角色定義
  - `agents/project-manager/agent-prompt.md` - Project Manager 角色定義
- **Agents（執行層）**：
  - `agents/content-framing/agent-prompt.md` - Content-Framing Agent
  - `agents/ig-agents/ig-ideation-agent.md` - IG 三圖架構設計
  - `agents/ig-agents/ig-copywriting-agent.md` - IG 文案撰寫
  - `agents/ig-agents/ig-visual-agent.md` - IG 視覺設計指示
  - `agents/ig-agents/content-creation-agent.md` - IG 內容整合
- **品牌核心文件**：
  - `shared/brand-identity.md` - 品牌識別（待補充 Leader 資訊）
  - `shared/content-pillars.md` - 三大內容支柱定義
  - `shared/visual-guidelines.md` - IG 視覺規範（待補充 Canva 模板資訊）
- **內容中心**：
  - `content-hub/ideas-pool.md` - 內容點子庫
- **資源文件**：
  - `resources/notion-integration.md` - Notion API 整合說明

#### 修改檔案
- `CLAUDE.md` - 加入 CLI 協作規範與 Session Log 機制說明

### ⏭️ 待辦事項

#### 高優先級（需要 Leader 補充）
- [ ] **補充 brand-identity.md**：
  - 品牌定位細節（專業領域、獨特性、目標受眾）
  - 品牌價值觀（3-5 個核心信念）
  - 品牌故事（初衷、願景）
  - 當前品牌階段（可辨識/可信任/可認同）
- [ ] **補充 visual-guidelines.md**：
  - Canva 模板截圖或連結
  - 三個主題的具體色碼
  - 橘色 A 與橘色 B 的視覺差異說明
  - 字體與排版細節
- [ ] **補充 content-pillars.md**：
  - 三大支柱的理想比例
  - 各支柱的具體主題範例
- [ ] **補充 ideas-pool.md**：
  - 初始內容點子（各支柱至少 3-5 個點子）

#### 中優先級（系統建立）
- [ ] 測試 Agent 系統（從 IG 貼文開始）
- [ ] 建立第一個實際的 IG 貼文（驗證流程）
- [ ] 建立 Blog Agents（Phase 2）
- [ ] 建立支援 Agents（Brand-Strategy, Reflection）

#### 低優先級（長期優化）
- [ ] 整合 Podcast 內容流程
- [ ] 建立 Analytics Agent
- [ ] 建立 Community Agent

### 🎯 下次重點

1. **與 Social Manager 對話（本對話）**：
   - 補充品牌核心文件的待填資訊
   - 討論首次內容生產的策略（選什麼主題？）
   - 確認視覺規範細節

2. **與 Project Manager 對話（另開新對話）**：
   - 根據 Social Manager 的策略指示
   - 開始實際生產第一個 IG 貼文
   - 測試整個 Agent 協作流程

3. **使用 Claude Projects**：
   - 設定 Project Knowledge（包含整個專案資料夾）
   - 為 Social Manager 和 Project Manager 分別建立對話
   - 使用對應的 agent-prompt.md 作為 Custom Instructions

### 💡 系統架構已完成
✅ **基礎建設完成度：90%**
- Agent 角色定義清楚
- 工作流程設計完整
- 文件結構建立完成
- Git 版本控制啟用
- Session Log 機制建立

🔄 **待補充：品牌具體資訊（需要 Leader 提供）**
- 品牌定位細節
- 視覺規範具體參數
- 內容點子初始庫

### 📌 重要提醒

#### 如何使用這個系統
1. **策略討論**：與 Social Manager 對話（使用 `agents/social-manager/agent-prompt.md`）
2. **執行任務**：與 Project Manager 對話（使用 `agents/project-manager/agent-prompt.md`）
3. **每次 Session**：記得更新 SESSION-LOG.md 並 git push

#### Git 工作流程
```bash
# 開始工作前
git pull

# 結束工作時
git add .
git commit -m "descriptive message"
git push origin main
```

#### 本次 Git Commit
```
git commit -m "Initial commit: Brand management system setup

- Established multi-tier AI Agent architecture
- Created brand core documents (identity, content pillars, visual guidelines)
- Built IG Agents system (Ideation, Copywriting, Visual, Content-Creation)
- Set up Content-Framing Agent
- Added Notion CMS integration documentation
- Implemented Session Log mechanism for CLI collaboration
- Added .gitignore to protect sensitive information"
```

---

## Session #003 - 2025-12-12

### 📌 本次目標
建立 CLI Slash Commands 與 Notion IG 內容整合

### 💬 討論內容

#### 1. CLI Slash Commands 系統
Leader 指出之前建立的 Agent prompts 無法在 CLI 中使用，需要建立 slash commands。

**建立的 Slash Commands**：
- `/social` - Social Manager（品牌策略討論）
- `/pm` - Project Manager（任務協調）
- `/ig` - 完整 IG 內容生產流程
- `/ideas` - 內容點子庫管理
- `/session` - Session Log 更新助手
- `/overview` - 系統總覽

#### 2. Notion IG 內容整合
Leader 提供了現有的 Notion IG Content Database，包含 17 筆內容點子與已發布文章。

**發現的資訊**：
- IG Content Database：https://tnfsp.notion.site/a5f5e4b12f9945b599aa1a3f4aff6454
- IG Archive Database：https://www.notion.so/tnfsp/12f4cac225e84f7bbae8c257424356e5
- 欄位結構：主題名稱、發文主題、Status、Platform、Date、需要討論

**分類系統**：
- 醫院日常（8 筆）- 混合醫學知識與臨床故事
- 自我成長議題（7 筆）- 個人成長與反思
- 未分類（2 筆）

#### 3. Notion Token 管理
釐清了兩個不同的 Notion Integration：
- **NOTION_WEBSITE_TOKEN**：用於 Blog 發布到 wilsonchao.com
- **NOTION_BRAND_TOKEN**：用於讀取 Brand 的 IG 內容

### ✅ 完成事項
- [x] 建立 6 個 CLI Slash Commands（`.claude/commands/`）
- [x] 建立 Notion IG 同步腳本（`scripts/sync-notion-ig.js`）
- [x] 建立 Notion 結構調試腳本（`scripts/debug-notion-structure.js`）
- [x] 設定 `package.json` 與安裝 Notion SDK
- [x] 更新 `.env` 檔案（分離兩個 Notion tokens）
- [x] 成功同步 17 筆 IG 內容點子到 `ideas-pool.md`
- [x] 更新 `notion-integration.md` 文件
- [x] Git commit & push

### 📝 檔案變更記錄

#### 新增檔案
- **Slash Commands**：
  - `.claude/commands/social.md` - Social Manager command
  - `.claude/commands/pm.md` - Project Manager command
  - `.claude/commands/ig.md` - IG 內容生產流程
  - `.claude/commands/ideas.md` - 點子庫管理
  - `.claude/commands/session.md` - Session Log 助手
  - `.claude/commands/overview.md` - 系統總覽
- **Scripts**：
  - `scripts/sync-notion-ig.js` - Notion IG 內容同步腳本
  - `scripts/debug-notion-structure.js` - Notion 結構調試腳本
  - `package.json` - Node.js 專案設定
- **Environment**：
  - `.env` - Notion API credentials（不納入版本控制）

#### 修改檔案
- `resources/notion-integration.md` - 加入 IG Content 與 Archive databases 資訊
- `content-hub/ideas-pool.md` - 同步 17 筆 Notion IG 內容

### 💡 重要發現

#### Leader 的內容分類系統
與我們原本設計的「醫學/故事/個人成長」略有不同：
- **醫院日常**：包含醫學知識 + 臨床故事（混合型）
- **自我成長議題**：對應到「個人成長」

#### 平台標記更細緻
- Instagram 📸 - 醫學
- Instagram 📸 - 故事
- Instagram 📸 - 成長

### ⏭️ 待辦事項

#### 高優先級
- [ ] 建立從 Archive Database 同步的腳本（學習已發布內容）
- [ ] 補充品牌核心文件（`brand-identity.md`, `visual-guidelines.md`）
- [ ] 測試 CLI Slash Commands 的實際使用

#### 中優先級
- [ ] 建立 `/sync` command 來快速同步 Notion 內容
- [ ] 測試第一個 IG 內容生產流程（`/ig`）
- [ ] 根據 Notion 內容調整 content-pillars.md 的分類定義

#### 低優先級
- [ ] 建立 Archive 內容的分析報告（哪些主題表現好？）
- [ ] 整合 Projects Database（Daily 日記）到系統

### 🎯 下次重點

1. **測試 Slash Commands**：
   - 使用 `/overview` 檢視系統
   - 使用 `/ideas` 管理點子庫
   - 使用 `/ig` 測試內容生產流程

2. **補充品牌資訊**：
   - 根據 Notion 現有內容，補充視覺規範細節
   - 確認內容分類系統（醫院日常 vs 醫學/故事）

3. **同步 Archive 內容**：
   - 從已發布文章學習內容風格
   - 分析哪些主題表現較好

### 📊 系統狀態更新

✅ **基礎建設：100% 完成**
- Agent 系統架構 ✓
- CLI Slash Commands ✓
- Notion 整合 ✓
- Git 版本控制 ✓

🔄 **內容庫：已有 17 筆 Notion 內容**
- 醫院日常：8 筆
- 自我成長議題：7 筆
- 未分類：2 筆

📍 **下一階段：實際測試與生產**
- 測試 `/ig` 生產第一個貼文
- 根據實際運作優化系統

### Git Commit
```bash
git commit -m "feat: Add Notion IG content sync integration

- Created sync script to pull IG content ideas from Notion
- Added debug script to inspect Notion database structure
- Successfully synced 17 content ideas from Notion
- Ideas pool now includes: titles, status, platforms, dates
- Categorized into: 醫院日常, 自我成長議題
- Separated Notion tokens: website (blog) vs brand (IG)"
```

---

## Session #004 - 2025-12-12

### 📌 本次目標
完成第一篇 IG 貼文「沒有姓名的值班機器」的完整產出流程，並建立標準化檔案結構

### 💬 討論內容

#### 1. 檔案結構重新設計
建立了清晰的 outputs 資料夾結構：

```
outputs/
├── 文章/                           # Blog 文章產出
└── IG貼文/                         # Instagram 貼文產出
    └── YYYY-MM-DD-IG貼文-類型-標題/
        ├── [標題]_草稿.pptx        # PPT 草稿
        ├── [標題]_內容.txt         # 文字內容
        ├── [標題]_封面.png         # AI 封面圖
        └── [標題]_01~08.png        # 完成圖片
```

**重要決策**：
- 所有檔案名稱使用中文（不用英文）
- 日期格式：YYYY-MM-DD
- 類型固定：醫學 / 故事 / 個人成長

#### 2. 浮水印精確位置設定
Leader 提供了浮水印的精確規格：
- **高度**：2.03cm
- **寬度**：6.49cm
- **水平位置**：19.05cm（從左上角）
- **垂直位置**：22.35cm（從左上角）
- **調整**：高度寬度 68%

#### 3. 模板使用策略
**重要決策**：第一張（封面）和最後一張（封底）直接使用 Canva 模板
- 模板路徑：
  - 醫學：`assets/canva-templates/醫學貼文模板.pptx`
  - 故事：`assets/canva-templates/故事貼文模板 .pptx`
  - 個人成長：`assets/canva-templates/成長貼文模板 .pptx`

**工作流程**：
1. 從模板開啟（有 6 張投影片）
2. 修改第一張的標題和副標題
3. 刪除中間範例內容（保留封面和封底）
4. 插入 6 張內容頁
5. 重新排序：封面 → 內容1-6 → 封底

#### 4. 品牌視覺識別：熊
**關鍵決策**：所有 AI 生成圖片都以「熊」作為主角

**原因**：
- 熊 = @momobear_doctor 的品牌識別
- 熊的形象：可愛、溫暖、專業、有人性
- 風格：油畫風格下的熊，柔和、藝術化
- 呈現：醫師熊、思考的熊、工作中的熊等

**注意事項**：
- ✅ 不要過於卡通或幼稚
- ✅ 不要過於寫實或恐怖
- ✅ 保持油畫印象派風格

#### 5. 第一篇貼文：沒有姓名的值班機器
**主題類型**：個人成長（橘色系）

**AI 圖片 Prompt（最終版）**：
```
Oil painting style, warm orange and golden tones, a bear in medical scrubs holding a phone or making a phone call in a hospital corridor, faceless or blurred features, melancholic and introspective atmosphere, impressionist brushstrokes, muted colors, sense of anonymity and loss of identity, soft lighting
```

**關鍵元素**：
- 🐻 熊作為主角
- 📞 打電話（呼應「喂，我是某某樓層的值班醫師...」）
- 👔 醫師服
- 🏥 醫院走廊
- 😶 模糊的五官（失去姓名/身份）

**Caption**：
> 最近接到學弟妹的會診電話，越來越常聽到這樣的開場：「喂，我是某某樓層的值班醫師...」
>
> 不是張醫師、不是李醫師，只是「值班醫師」。
>
> 什麼時候開始，我們連名字都不說了？也許是工作壓力讓我們麻木了，也許是害怕被記住、被針對，或是醫療文化告訴我們，職位比人更重要。
>
> 當我們失去名字，我們從「人」變成了「功能」，從「張醫師」變成「值班機器」。這是保護機制，還是我們付出的代價？
>
> 你不只是一台值班機器。記得說出你的名字，下次打電話時，介紹你自己。在體制中，不失去自己。

**投影片結構**（8 張）：
1. 封面：「沒有姓名的值班機器」+ 副標題「PART 1」
2. 「喂，我是某某樓層的值班醫師...」
3. 不是張醫師、不是李醫師、不是王醫師 → 只是「值班醫師」
4. 什麼時候開始我們連名字都不說了？
5. 為什麼會這樣？
6. 當我們失去名字，我們失去了什麼？
7. 你不只是一台值班機器（結尾）
8. 封底（固定模板）

### ✅ 完成事項
- [x] 建立 `outputs/` 資料夾結構（文章/ + IG貼文/）
- [x] 創建第一個貼文資料夾：`2025-12-12-IG貼文-個人成長-沒有姓名的值班機器/`
- [x] 完全重寫 `scripts/generate_ppt.py`：
  - 從模板開始
  - 修改封面標題/副標題
  - 刪除範例內容
  - 插入 6 張內容頁
  - 重新排序投影片
  - 使用精確浮水印位置（19.05cm, 22.35cm, 6.49cm × 2.03cm）
- [x] 創建 `scripts/generate_content_file.py`：
  - 自動生成內容文字檔案
  - 包含 Caption、投影片文字、AI prompt、製作流程
- [x] 成功生成第一篇貼文的 PPT 和內容檔案
- [x] 更新 `resources/ai-image-prompts.md`：
  - 加入「熊作為主角」的重要說明
  - 更新所有三大主題的 prompt 範本（醫學/故事/成長）
  - 加入這次貼文的具體範例
  - 加入打電話元素
- [x] 創建 `outputs/README.md`：完整說明檔案結構與使用方式
- [x] 更新主 `README.md`：反映新的檔案結構

### 📝 檔案變更記錄

#### 新增檔案
- **Outputs 結構**：
  - `outputs/README.md` - Outputs 資料夾完整說明
  - `outputs/文章/` - Blog 文章產出資料夾
  - `outputs/IG貼文/` - IG 貼文產出資料夾
  - `outputs/IG貼文/2025-12-12-IG貼文-個人成長-沒有姓名的值班機器/` - 第一篇貼文資料夾

- **第一篇貼文產出**：
  - `沒有姓名的值班機器_草稿.pptx` - 8 張投影片（封面+內容1-6+封底）
  - `沒有姓名的值班機器_內容.txt` - 完整文字內容與 AI prompt

- **自動化腳本**：
  - `scripts/generate_ppt.py` - 完全重寫，從模板生成 PPT
  - `scripts/generate_content_file.py` - 生成內容文字檔案

#### 修改檔案
- `README.md` - 更新專案文件結構，反映 outputs/ 新架構
- `resources/ai-image-prompts.md` - 加入「熊」作為主角的指引，更新所有 prompt 範本
- `shared/design-system.md` - （已存在，未修改）
- `shared/visual-guidelines.md` - （已存在，未修改）

### 🎯 技術細節

#### PPT 生成流程
```python
1. 載入模板（成長貼文模板 .pptx）
2. 修改第一張的標題和副標題
3. 刪除中間範例投影片（保留封面和封底）
4. 在中間插入 6 張內容頁
5. 重新排序：封面 → 內容1-6 → 封底
6. 每張投影片添加精確位置的浮水印圖片
7. 儲存到正確的資料夾結構
```

#### 浮水印實作
```python
def add_watermark(slide):
    left = Cm(19.05)   # 19.05cm 從左上角
    top = Cm(22.35)    # 22.35cm 從左上角
    width = Cm(6.49)   # 6.49cm 寬度
    height = Cm(2.03)  # 2.03cm 高度
    slide.shapes.add_picture(WATERMARK_PATH, left, top, width=width, height=height)
```

#### POST_CONFIG 設定
```python
POST_CONFIG = {
    'date': '2025-12-12',
    'type': '個人成長',  # 醫學 / 故事 / 個人成長
    'title': '沒有姓名的值班機器',
    'subtitle': 'PART 1',  # 副標題（成長主題專用）
}
```

### 💡 重要決策與學習

#### 1. 檔案命名規則
- **資料夾**：`YYYY-MM-DD-IG貼文-類型-標題`
- **PPT**：`[標題]_草稿.pptx`
- **文字**：`[標題]_內容.txt`
- **封面**：`[標題]_封面.png`
- **完成圖**：`[標題]_01.png ~ _08.png`
- **統一使用中文**

#### 2. 模板優先策略
- 不從零開始建立 PPT
- 從 Canva 模板開始，保持視覺一致性
- 只修改標題和插入內容，不改封面/封底設計

#### 3. 品牌視覺識別
- **熊** = @momobear_doctor 的核心識別
- 所有 AI 圖片都要有熊
- 油畫風格 + 熊 = 獨特的品牌視覺

#### 4. 打電話元素的加入
- 從 Leader 反饋中快速調整
- Prompt 加入「holding a phone or making a phone call」
- 更貼合貼文主題（接電話時不說名字）

### ⏭️ 待辦事項

#### 立即執行（這篇貼文）
- [ ] **生成 AI 封面圖**：使用更新後的 prompt（含熊+打電話）
- [ ] **匯入 Canva**：將 `_草稿.pptx` 匯入
- [ ] **替換背景**：Slide 1 替換為 AI 圖片 + 橘色遮罩
- [ ] **匯出圖片**：PNG 1080x1080px，命名為 `_01.png ~ _08.png`
- [ ] **發布到 IG**：配上 Caption

#### 系統優化
- [ ] 測試其他兩種模板（醫學、故事）
- [ ] 驗證浮水印在所有模板上的位置是否正確
- [ ] 建立更多 AI prompt 範例（含熊的各種場景）

#### 文件完善
- [ ] 補充 `shared/brand-identity.md`（熊的品牌故事）
- [ ] 更新 `shared/visual-guidelines.md`（加入熊的設計指引）
- [ ] 建立 AI 圖片生成的最佳實踐文件

### 🎯 下次重點

1. **完成第一篇貼文發布**：
   - 生成 AI 封面圖
   - Canva 製作完成
   - 發布到 IG
   - 記錄受眾反應

2. **驗證整個流程**：
   - 腳本是否順暢？
   - 有哪些可以優化的地方？
   - 時間花費多少？

3. **建立第二篇貼文**：
   - 測試另一個主題（醫學或故事）
   - 驗證模板切換是否順利
   - 持續優化流程

### 📊 系統狀態更新

✅ **基礎建設：100% 完成**
- Agent 系統 ✓
- CLI Slash Commands ✓
- Notion 整合 ✓
- Git 版本控制 ✓
- **檔案結構標準化 ✓**
- **PPT 自動生成系統 ✓**
- **內容文字檔案生成 ✓**

🎨 **品牌視覺系統：90% 完成**
- 三大主題色系定義 ✓
- 浮水印精確位置 ✓
- 模板整合策略 ✓
- **熊作為品牌主角 ✓**
- **AI 圖片 prompt 範本 ✓**
- 字體與排版規範 ✓

📝 **第一篇貼文：80% 完成**
- 主題選定 ✓
- Caption 撰寫 ✓
- 投影片內容 ✓
- PPT 生成 ✓
- 內容文字檔案 ✓
- AI prompt 設計 ✓
- ⏳ AI 封面圖生成（待執行）
- ⏳ Canva 製作（待執行）
- ⏳ 發布到 IG（待執行）

### 📌 重要提醒

#### 使用新的腳本流程
```bash
# 生成新貼文時：

# 1. 編輯 POST_CONFIG
# scripts/generate_ppt.py 和 scripts/generate_content_file.py 頂部

# 2. 執行腳本
python scripts/generate_ppt.py
python scripts/generate_content_file.py

# 3. 檢查產出
# outputs/IG貼文/YYYY-MM-DD-IG貼文-類型-標題/
```

#### AI 圖片生成記得
- ✅ 一定要有熊
- ✅ 符合主題色系（醫學=藍、故事/成長=橘）
- ✅ 油畫印象派風格
- ✅ 根據內容客製化場景

#### 浮水印位置已固定
- 不需要手動調整
- 腳本會自動加到正確位置
- 尺寸：6.49cm × 2.03cm
- 位置：右下角（19.05cm, 22.35cm）

### Git Commit
```bash
git add .
git commit -m "feat: Complete first IG post production system

- Reorganized outputs/ structure (文章/ + IG貼文/)
- Rewrote generate_ppt.py to use Canva templates
- Created generate_content_file.py for text content
- Set precise watermark position (19.05cm, 22.35cm, 6.49×2.03cm)
- Added 'bear as main character' to all AI prompts
- Generated first post: 沒有姓名的值班機器
- Updated AI image prompt guidelines with bear templates
- Created outputs/README.md for file structure documentation
- All file names now use Chinese for clarity

First post (80% complete):
- 8 slides: cover + content 1-6 + back cover
- Caption written
- PPT generated from template
- AI prompt ready (bear + phone call + hospital corridor)
- Next: generate AI cover image and publish to IG"
git push origin main
```

---

### 🔧 重要調整 #1：模板封面和封底完全不動

**發現時間**：Session #004 後期
**問題**：最初我修改了模板封面（第一張）的標題和副標題
**Leader 回饋**：「1. 不用再重作，只是下次封面也複製相同的，你的封面在下一張」

**正確做法**（共 9 張）：
1. 第一張：**模板封面** → 完全不動
2. 第二張：**標題頁** → 標題 + 副標題 + 註記（替換 AI 圖片背景）
3-8. 內容頁 1-6
9. 最後一張：**模板封底** → 完全不動

**重要性**：
- 模板封面和封底是固定的品牌識別元素
- 保持每篇貼文的視覺一致性
- 第二張標題頁才是客製化的部分

**已記錄到**：
- `IMPORTANT-NOTES.md` - 重要提醒文件
- `scripts/generate_ppt.py` - 已更新（未來版本會修正）
- `shared/writing-style.md` - 寫作指引

---

### 🔧 重要調整 #2：每篇 IG 貼文都要寫「後話」

**發現時間**：Session #004 後期
**Leader 提供範例**：

```
後話

其實這篇已經存在電腦裡面很久了，一直沒有時間跟大家分享。

一開始養成這個習慣是看到老師跟學長說：「你沒有說名字，我怎麼知道你是誰？」後來自己當了學長也開始觀察到這個現象。

對我來說，具名不只是禮貌，更是代表我願意為我的言行負責任，也是我們在醫院建立個人名聲的方式。

有學弟妹說，覺得自己是誰沒有人在乎，但你自己都不在乎了，誰會在乎！

下次打電話時，試試看介紹你自己，或許會有意想不到的收穫！
```

**後話結構**：
1. 【背景故事/創作緣起】這篇文章的由來
2. 【個人經驗/觀察起源】自己的經驗或觀察
3. 【深化主題/個人觀點】進一步的思考
4. 【回應常見疑慮】學弟妹或讀者的疑問
5. 【正向鼓勵結尾】具體建議 + 鼓勵行動

**為什麼重要**：
- **個人化**：讓讀者看到真實的你
- **深化主題**：提供更多背景與思考
- **建立連結**：分享個人經驗增加親切感
- **實際建議**：給出具體可行的行動

**已記錄到**：
- `shared/writing-style.md` - 後話完整結構與範例
- `agents/ig-agents/ig-copywriting-agent.md` - Agent 提示更新
- `IMPORTANT-NOTES.md` - 檢查清單

**Leader 指示**：「2. 下次IG貼文也試著寫寫後話」

---

### 🔧 重要調整 #3：IG Caption 要極簡短

**發現時間**：Session #004 最後階段
**問題**：最初我寫了 300-500 字的 Caption，包含完整解釋和後話
**Leader 回饋**：「CAPTION你沒有記憶到，通常是簡短的幾句話，不會超過一段」

**錯誤示範**（太長）：
```
最近接到學弟妹的會診電話，越來越常聽到這樣的開場：「喂，我是某某樓層的值班醫師...」

不是張醫師、不是李醫師，只是「值班醫師」。

什麼時候開始，我們連名字都不說了？也許是工作壓力讓我們麻木了...（後面還有好幾段）
```

**正確示範**（簡短）：
```
最近接到學弟妹的會診電話，越來越常聽到這樣的開場...
```

**IG Caption 特色**：
- **極簡短**：通常只有幾句話，不超過一段
- **不說明投影片內容**：投影片已經說明了，Caption 不重複
- **情境式或問句式**：引發思考或共鳴
- **留白**：不把話說滿，讓投影片說話

**注意**：後話內容適合寫在 Blog 文章中，而非 IG Caption

**已修正**：
- `shared/writing-style.md` - 加入 IG Caption 風格說明
- `scripts/generate_content_file.py` - 使用簡短 Caption
- `agents/ig-agents/ig-copywriting-agent.md` - 更新 Agent 提示
- 已重新生成內容檔案

---

### 📚 額外產出：完整 Blog 文章

**Leader 詢問**：「這篇可以寫成文章嗎」
**選擇**：A（立即撰寫）

**產出**：
- 檔案：`outputs/文章/2025-12-12-文章-沒有姓名的值班機器/沒有姓名的值班機器.md`
- 字數：約 2,800 字
- 結構：
  - 引言
  - 現象觀察（這不是個案）
  - 原因分析（個人/系統/社會三層面）
  - 影響探討（對個人/團隊/病人）
  - 反思與出路（具名的意義、我們可以怎麼做）
  - 結語（在體制中，不失去自己）
  - 後記（個人經驗分享）

**內容再利用成功**：
- IG 貼文：簡短、視覺化、引發共鳴
- Blog 文章：深度、完整論述、提供脈絡

---

### Git Commit #2
```bash
git commit -m "fix: Correct IG Caption style to be concise (1-2 sentences)

Major changes:
- Updated shared/writing-style.md to document IG Caption should be extremely short
- Added clear examples of correct vs incorrect Caption length
- Simplified Caption in generate_content_file.py to single sentence
- Regenerated content file with corrected Caption
- Created full blog article (2,800 words) expanding on IG post

Key learning: IG Captions are 1-2 sentences only, slides tell the story"
git push origin main
```

---

---

## 📊 專案整體進度追蹤

### Phase 1: 建立共識
- [x] 定義專案範疇與目標
- [x] 建立協作框架
- [ ] 確認品牌策略方向
- [ ] 完成品牌共識文件

### Phase 2: 系統建立
- [ ] 建立第一個 Agent
- [ ] 設計內容工作流程
- [ ] 整理模板庫

### Phase 3: 執行與優化
- [ ] 實際運作
- [ ] 數據追蹤
- [ ] 持續優化

---

## 🔖 快速參考

### 重要文件位置
- 協作框架：`claude.md`
- 對話記錄：`SESSION-LOG.md`（本文件）
- 品牌共識：`brand-consensus.md`（待建立）

### 現有資源路徑
- 網站專案：`C:\Users\Yuru Hung\Desktop\Project\Done\wilsonchao.com`
- Telegram 專案：`C:\Users\Yuru Hung\Desktop\Project\Done\yt-readwise-telegram-bridge`
- 本專案：`C:\Users\Yuru Hung\Desktop\Project\某某醫師IG貼文助手`

### 帳號資訊
- IG：@momobear_doctor
- 網站：wilsonchao.com
- 帳密：參考交班資料（momobear_doctor / qwer840401）

### 視覺規範
- 限動模板：白底灰字 (#31363C) / 藍底白字 (#1B2A44, #FFFFFF)
- 貼圖風格：Vivisticker

---

**Log 維護規則**：
1. 每次 Session 結束前必須更新
2. Social Project Manager 負責記錄
3. Leader 確認重要決策後標註
4. 保持簡潔但完整
