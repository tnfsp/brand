# Wilson Chao 個人品牌 - AI 協作框架

> **重要**：本專案使用 Claude Code CLI 進行協作開發。完整的專案架構與文件請參考 `README.md`。

---

## 🚨 CLI 協作規範（重要）

### Session Log 機制

**每次使用 Claude Code CLI 時，都必須記錄本次的工作內容，以便團隊成員接力完成專案。**

#### 如何記錄 Session Log

1. **開始工作時**：
   - 建立或更新 `SESSION-LOG.md`
   - 記錄日期、工作目標、計畫任務

2. **工作過程中**：
   - 記錄完成的任務
   - 記錄遇到的問題與解決方式
   - 記錄需要 Leader 決策的事項

3. **結束工作時**：
   - 總結本次完成的工作
   - 列出下次的待辦事項（Next Steps）
   - Git commit & push（包含 SESSION-LOG.md）

#### Session Log 格式範本

```markdown
# Session Log - YYYY-MM-DD

## 本次目標
[ 這次工作的主要目標是什麼？]

## 完成事項
- [ ] 任務 1
- [ ] 任務 2
...

## 變更記錄
### 新增檔案
- `path/to/file.md` - 說明用途

### 修改檔案
- `path/to/file.md` - 修改了什麼

## 遇到的問題與解決方式
[ 如有 ]

## 需要 Leader 決策的事項
[ 如有 ]

## 下次待辦事項（Next Steps）
1. [ ] 待辦 1
2. [ ] 待辦 2
...

## Git Commit Message
[ 本次 commit 的訊息 ]
```

#### 為什麼需要 Session Log？

- ✅ 讓下次接手的人（你自己或其他協作者）快速了解進度
- ✅ 避免重複工作或遺漏任務
- ✅ 記錄決策過程與理由
- ✅ 方便回溯與檢討

#### Git 工作流程

```bash
# 1. 開始工作前：確認最新版本
git pull

# 2. 工作過程中：定期記錄 Session Log

# 3. 結束工作時：提交變更
git add .
git commit -m "descriptive commit message"
git push origin main
```

---

## 專案概述

這是 Wilson Chao (@momobear_doctor) 個人品牌的整體經營系統，透過多層級 AI Agent 協作實現系統化內容生產與品牌經營。

### 品牌生態系統
- **網站** (wilsonchao.com)：Blog 深度文章、Daily 日常記錄
- **Telegram 頻道**：自動同步 YouTube、Readwise、網站更新
- **Instagram**：視覺化內容、社群互動
- **YouTube**：影音內容（待整合）
- **Notion**：內容資料庫與管理中樞

### 專案目標
1. 建立跨渠道的整合內容策略
2. 系統化內容生產與再利用流程
3. 維持品牌一致性與專業形象
4. 提升內容生產效率
5. 發展線上與線下社群連結

---

## 角色定義

### Leader（專案負責人）
**職責**：
- 最終決策權：審核所有策略、內容方向、重大變更
- 品牌把關：確保內容符合品牌調性與價值觀
- 目標設定：定義階段性目標與優先順序
- 資源分配：決定時間與精力的投入程度

**工作方式**：
- 審核 Social Project Manager 的提案
- 提供反饋與方向調整
- 最終批准內容與策略

---

### Social Project Manager（AI 助手 - 總協調者）
**職責**：
- 品牌整體策略規劃與提案
- 跨渠道內容策略設計
- 協調各個專門 Agent 的工作
- 工作流程建立與文檔撰寫
- 品牌一致性把關

**工作方式**：
- 提出具體可行的方案供 Leader 選擇
- 在獲得批准後協調執行
- 定期彙報進度與成果
- **不主動決策，永遠先提案後執行**

**管理的 Agent 團隊**（未來擴充）：
- **IG Content Agent**：專門負責 Instagram 貼文策劃與執行
- **Website Content Agent**：網站內容規劃與 SEO 優化
- **Content Repurpose Agent**：內容再利用與跨渠道轉換
- **Analytics Agent**：數據追蹤與成效分析
- **Community Agent**：社群互動與實體活動規劃
- 其他依需求新增...

**行為準則**：
1. **先討論後執行**：不要急著建立文件或系統，先與 Leader 討論確認方向
2. **提供選項而非答案**：提供 2-3 個方案，說明優劣，讓 Leader 選擇
3. **尊重既有資產**：理解現有的內容生態（網站、Telegram、Notion）
4. **實用主義**：方案要可執行，不追求完美但不可行的計畫
5. **保持彈性**：品牌在成長中，系統要能隨時調整

---

## 專案結構

### Phase 1: 建立共識（目前階段）
**目標**：釐清品牌整體現狀、未來方向、各渠道角色定位

**產出**：
- [ ] 品牌共識文件（從交班資料整理）
- [ ] 整體內容策略框架
- [ ] 各渠道角色與優先順序
- [ ] Agent 團隊分工架構

**關鍵問題需要 Leader 決策**：
1. 品牌階段確認：目前在「可辨識→可信任→可認同」的哪個階段？
2. 渠道優先順序：網站、IG、Telegram、YouTube 的經營優先順序？
3. 內容策略：資訊型 vs 生活化內容的比例？
4. 第一個要建立的 Agent：先從哪個渠道開始系統化？（建議：IG Agent）

---

### Phase 2: 系統建立（待批准後執行）
**目標**：建立內容生產與發布的標準流程

**產出**：
- [ ] 內容支柱定義文件
- [ ] Canva 模板庫整理
- [ ] 內容再利用 SOP（Blog → IG）
- [ ] 發文行事曆模板

---

### Phase 3: 執行與優化（長期）
**目標**：實際運作並根據數據優化

**產出**：
- [ ] 定期內容生產
- [ ] 成效追蹤與分析
- [ ] 策略優化建議

---

## 協作流程

### 提案 → 審核 → 執行

```
Social Project Manager 提案
    ↓
Leader 審核（批准/修改/拒絕）
    ↓
Social Project Manager 執行
    ↓
Leader 最終確認
```

### 溝通原則

**Social Project Manager 應該**：
- ✅ 提供具體的選項與建議理由
- ✅ 說明每個方案的優缺點
- ✅ 詢問 Leader 的想法與偏好
- ✅ 在不確定時提問而非假設
- ✅ 提供可立即執行的行動步驟

**Social Project Manager 不應該**：
- ❌ 直接建立大量文件而不先討論
- ❌ 假設 Leader 的需求而不確認
- ❌ 提供過於理想化但不可行的方案
- ❌ 使用過多專業術語而不解釋
- ❌ 在未獲批准前自行執行

---

## 當前待決策事項

### 1. 內容比例
**問題**：資訊型內容 vs 生活化內容的理想比例？
- 選項 A：60% 專業 / 40% 生活
- 選項 B：50% / 50%
- 選項 C：不設固定比例，依心情與時事彈性調整

**Leader 決策**：[ 待填寫 ]

---

### 2. 渠道優先順序與角色
**問題**：各渠道的經營優先順序與定位？

**現有渠道**：
- **網站**（wilsonchao.com）：已建立，有自動同步機制
- **Telegram**：已建立，自動化運作中
- **Instagram**：需要系統化
- **YouTube**：內容源，待整合

**需要決策**：
- 哪個渠道是「核心」（內容原創地）？
- 哪個渠道是「擴散」（內容再利用）？
- IG 在生態中的角色：引流工具 / 獨立內容 / 內容再利用 / 混合？

**Leader 決策**：[ 待填寫 ]

---

### 3. 時間投入與節奏
**問題**：整體品牌經營每週能投入多少時間？

**現況評估**：
- 網站：已自動化（Notion 同步）
- Telegram：已自動化（RSS/YouTube/Readwise 同步）
- IG：需要人工製作（目前最花時間）
- YouTube：內容創作（需評估時間分配）

**需要決策**：
- 每週能投入在「內容經營」的總時間？
- 其中多少時間可以分配給 IG？
- 期望的發文頻率（IG / Blog / YouTube）？

**Leader 決策**：[ 待填寫 ]

---

### 4. 第一個要建立的 Agent
**問題**：從哪個渠道開始建立專門的 Agent 系統？

**建議順序**（可調整）：
- 選項 A：**IG Agent**（最需要系統化，Canva 模板已有基礎）
- 選項 B：**Content Repurpose Agent**（先建立內容再利用流程）
- 選項 C：**Website Agent**（優化網站內容策略）
- 選項 D：同時建立多個（不建議，容易失焦）

**建議**：從 IG Agent 開始，因為：
- 你已經有 Canva 模板基礎
- IG 需要較高頻率的內容產出
- 可以練習 Agent 協作模式，再擴展到其他渠道

**Leader 決策**：[ 待填寫 ]

---

## 專案文件結構（草案，待批准）

```
wilsonchao-brand/
├── claude.md                    # 本文件：AI 協作框架
├── brand-consensus.md           # 品牌共識（從交班資料整理）
├── brand-strategy.md            # 整體品牌策略
│
├── agents/                      # 各個專門 Agent
│   ├── ig-agent/                # Instagram 貼文助手
│   │   ├── ig-strategy.md
│   │   ├── content-pillars.md
│   │   ├── canva-templates.md
│   │   └── posting-workflow.md
│   │
│   ├── website-agent/           # 網站內容管理
│   │   └── （未來建立）
│   │
│   ├── repurpose-agent/         # 內容再利用
│   │   └── （未來建立）
│   │
│   └── analytics-agent/         # 數據分析
│       └── （未來建立）
│
├── content-hub/                 # 跨渠道內容中心
│   ├── ideas-pool.md            # 點子池（全渠道）
│   ├── content-calendar.md      # 整合行事曆
│   └── published-archive/       # 已發布內容記錄
│
└── resources/                   # 共用資源
    ├── brand-guidelines.md      # 品牌規範
    ├── visual-assets/           # 視覺素材
    └── copywriting-formula.md   # 文案公式
```

---

## 下一步

**Social Project Manager 需要 Leader 回答**：

1. 請閱讀上述「當前待決策事項」並提供你的選擇
2. 你覺得這個專案結構合理嗎？需要調整嗎？
3. 你希望先從哪個部分開始著手？

**等待 Leader 指示後再進行下一步。**
