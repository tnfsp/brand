# Wilson Chao 個人品牌經營系統

## 專案概述

這是 Wilson Chao (@momobear_doctor) 個人品牌的整合經營系統，透過多層級 AI Agent 協作來實現：
- 系統化的內容生產流程
- 穩定的跨渠道內容產出
- 一致的品牌形象與調性
- 可擴展的經營架構

---

## 品牌生態系統

### 核心渠道
- **Instagram** (@momobear_doctor)：優先渠道，視覺化內容、社群互動
- **Blog** (wilsonchao.com)：深度長文，思考記錄與文筆練習
  - **CMS**：使用 Notion 作為內容管理系統
  - **自動同步**：Notion → 網站自動發布
- **Telegram**：自動同步機制（已建立）
- **Podcast**：未來可能重啟

### 技術架構
- **Notion** 作為內容中樞：
  - Blog Database：管理所有 Blog 文章
  - Projects Database：管理專案與內容規劃
  - 透過 API 與網站自動同步

### 內容三大支柱
1. **醫學**（藍色系視覺）
2. **故事**（橘色系視覺）
3. **個人成長**（橘色系視覺，設計略有不同）

### 產出目標
- IG：一個月至少 1 篇貼文
- Blog：一個月至少 1 篇文章
- 時間投入：每週 5-10 小時

---

## Agent 架構

### Level 0：Leader（你）
- 最終決策權
- 品牌方向把關
- 策略批准與調整

### Level 1：策略與協調層

#### Social Manager（品牌策略顧問）
- **角色**：與 Leader 討論品牌整體策略
- **職責**：品牌方向、長期規劃、策略建議
- **對話模式**：使用 `agents/social-manager/agent-prompt.md`
- **頻率**：每月或需要策略討論時

#### Project Manager（專案協調者）
- **角色**：接收策略並協調執行
- **職責**：任務分解、指揮 subagents、追蹤進度
- **對話模式**：使用 `agents/project-manager/agent-prompt.md`
- **頻率**：日常執行時使用

### Level 2：專門執行 Agents

#### 跨渠道 Agents
- **Brand-Strategy Agent**：品牌一致性把關
- **Content-Framing Agent**：內容發想與框架
- **Reflection Agent**：每月回顧與優化

#### Blog 專門 Agents
- **Blog-Ideation Agent**：Blog 主題發想
- **Blog-Writing Agent**：寫作協助
- **Blog-Editing Agent**：編輯潤飾

#### IG 專門 Agents
- **IG-Ideation Agent**：IG 主題發想與三圖架構
- **IG-Copywriting Agent**：文案撰寫
- **IG-Visual Agent**：視覺設計指示
- **Content-Creation Agent**：整合產出

---

## 專案文件結構

```
wilsonchao-brand/
├── README.md                           # 本文件
├── CLAUDE.md                           # 原始 AI 協作框架（保留參考）
├── SESSION-LOG.md                      # 對話記錄
│
├── shared/                             # 共享文件（所有 Agents 共用）
│   ├── brand-identity.md               # 品牌識別與價值觀
│   ├── content-pillars.md              # 三大內容支柱定義
│   ├── visual-guidelines.md            # IG 視覺規範（三主題顏色系統）
│   └── design-system.md                # 完整設計系統（實際規範）⭐
│
├── agents/                             # Agent 系統
│   ├── social-manager/                 # Social Manager（策略層）
│   │   ├── agent-prompt.md             # Agent 角色定義
│   │   └── strategy-framework.md       # 策略思考框架
│   │
│   ├── project-manager/                # Project Manager（協調層）
│   │   ├── agent-prompt.md             # Agent 角色定義
│   │   ├── subagent-roster.md          # Subagents 清單與分工
│   │   └── workflow-sops.md            # 工作流程 SOP
│   │
│   ├── content-framing/                # Content-Framing Agent
│   ├── blog-agents/                    # Blog 系列 Agents
│   └── ig-agents/                      # IG 系列 Agents
│
├── content-hub/                        # 內容中心
│   ├── ideas-pool.md                   # 內容點子庫
│   ├── monthly-plan.md                 # 月度計畫
│   └── archive/                        # 已發布內容記錄
│
├── resources/                          # 資源庫
│   ├── notion-integration.md           # Notion API 整合說明
│   └── ai-image-prompts.md             # AI 圖片生成指引⭐
│
├── assets/                             # 視覺素材⭐
│   ├── canva-templates/                # Canva 模板（PPT格式）
│   ├── ig-examples/                    # 已發布 IG 貼文範例
│   ├── reference/                      # 參考素材（浮水印、大頭貼、色彩）
│   └── fonts/                          # 字體檔案（csong）
│
├── scripts/                            # 腳本工具
│   ├── sync-notion-ig.js               # Notion IG 內容同步
│   ├── debug-notion-structure.js       # Notion 結構調試
│   ├── generate_ppt.py                 # PPT 自動生成⭐
│   └── generate_content_file.py        # 內容文字檔案生成⭐
│
└── outputs/                            # 產出檔案⭐
    ├── README.md                       # Outputs 資料夾說明
    ├── 文章/                           # Blog 文章產出
    │   └── YYYY-MM-DD-文章-標題/
    └── IG貼文/                         # Instagram 貼文產出
        └── YYYY-MM-DD-IG貼文-類型-標題/
            ├── [標題]_草稿.pptx        # PPT 草稿
            ├── [標題]_內容.txt         # 文字內容
            ├── [標題]_封面.png         # AI 封面圖
            └── [標題]_01.png           # 完成圖片
```

---

## 如何使用這個系統

### 使用 Claude Projects

1. **建立 Claude Project**：將此資料夾設為 Project Knowledge
2. **開啟策略對話**：使用 `agents/social-manager/agent-prompt.md` 作為 Custom Instructions
3. **開啟執行對話**：使用 `agents/project-manager/agent-prompt.md` 作為 Custom Instructions
4. **工作流程**：
   - 每月初：與 Social Manager 討論策略
   - 執行階段：與 Project Manager 協作產出內容
   - 月底：與 Social Manager 回顧與調整

### 工作節奏

**每月初（策略）**：
1. 與 Social Manager 討論本月品牌重點
2. Social Manager 輸出策略簡報給 Project Manager

**執行階段（產出）**：
1. Project Manager 根據策略分配任務給 subagents
2. 產出 IG 貼文（1 篇）
3. 產出 Blog 文章（1 篇）

**月底（回顧）**：
1. Reflection Agent 回顧產出品質
2. Social Manager 提出下月優化建議

---

## 優先順序

**核心目標排序**：
1. **D - 建立品牌系統**：長期可運作、可擴展
2. **B - 維持穩定產出**：不再中斷，持續產出
3. **C - 提升內容品質**：系統化規劃
4. **A - 降低創作門檻**：讓創作更容易

**建立順序**（分階段）：
- **Phase 1**（立即）：Social Manager + Project Manager + 品牌核心文件
- **Phase 2**（測試後）：Content-Framing Agent + IG Agents
- **Phase 3**（IG 順暢後）：Blog Agents
- **Phase 4**（累積經驗後）：Reflection Agent + 其他支援 Agents

---

## 更新記錄

- **2025-12-12**：建立專案架構，定義雙 Agent 系統（Social Manager + Project Manager）
