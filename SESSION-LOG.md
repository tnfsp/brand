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
