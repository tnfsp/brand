# Outputs 資料夾說明

> 此資料夾存放所有產出的內容檔案

---

## 📁 資料夾結構

```
outputs/
├── 文章/                                    # Blog 文章產出
│   └── YYYY-MM-DD-文章-標題/
│       ├── [標題].md                        # Markdown 文章
│       └── [標題]_meta.txt                  # 文章 metadata
│
└── IG貼文/                                  # Instagram 貼文產出
    └── YYYY-MM-DD-IG貼文-類型-標題/         # 每篇貼文一個資料夾
        ├── [標題]_草稿.pptx                 # PPT 草稿（匯入 Canva）
        ├── [標題]_內容.txt                  # 文字內容彙整
        ├── [標題]_封面.png                  # AI 生成的封面圖（手動添加）
        └── [標題]_01.png ~ _08.png          # 從 Canva 匯出的完成圖
```

---

## 🎨 IG 貼文資料夾

### 命名規則

```
YYYY-MM-DD-IG貼文-[類型]-[標題]
```

**類型**：
- `醫學` - 藍色系醫學主題
- `故事` - 橘色系故事主題
- `個人成長` - 橘色系個人成長主題

**範例**：
```
2025-12-12-IG貼文-個人成長-沒有姓名的值班機器/
```

### 資料夾內容

每個 IG 貼文資料夾包含：

#### 1. `[標題]_草稿.pptx`
- **用途**：PPT 草稿檔案，匯入 Canva 製作
- **生成方式**：由 `scripts/generate_ppt.py` 自動生成
- **內容**：
  - Slide 1：封面（需替換 AI 圖片背景）
  - Slide 2-N-1：內容頁
  - Slide N：封底（需替換固定模板）
  - 所有文字使用 csong 字體
  - 所有投影片右下角有浮水印

#### 2. `[標題]_內容.txt`
- **用途**：完整文字內容彙整
- **生成方式**：由 `scripts/generate_content_file.py` 自動生成
- **內容**：
  - 基本資訊（日期、類型、張數）
  - Caption 文案
  - 所有投影片的文字內容
  - AI 圖片生成 prompt
  - 製作流程說明

#### 3. `[標題]_封面.png`（手動添加）
- **用途**：AI 生成的封面圖片
- **生成方式**：使用 `_內容.txt` 中的 AI prompt，在 Midjourney/DALL-E 生成
- **規格**：
  - 風格：Oil painting style
  - 色調：依主題（藍色/橘色）
  - 尺寸：建議 1024x1024 或更高

#### 4. `[標題]_01.png` ~ `_08.png`（手動添加）
- **用途**：從 Canva 完成後匯出的最終圖片
- **規格**：1080x1080px PNG
- **編號**：依投影片順序編號（01, 02, 03...）

---

## 📝 文章資料夾

### 命名規則

```
YYYY-MM-DD-文章-[標題]
```

**範例**：
```
2025-12-15-文章-如何建立個人品牌/
```

### 資料夾內容

每個文章資料夾包含：

#### 1. `[標題].md`
- **用途**：Markdown 格式的 Blog 文章
- **內容**：完整文章內容，可直接同步到 Notion

#### 2. `[標題]_meta.txt`
- **用途**：文章 metadata
- **內容**：
  - 標題、日期、分類
  - SEO 關鍵字
  - 摘要
  - 封面圖片資訊

---

## 🛠️ 自動生成腳本

### 生成 IG 貼文

```bash
# 1. 編輯 scripts/generate_ppt.py 頂部的 POST_CONFIG
# 2. 編輯 scripts/generate_content_file.py 的 POST_CONFIG
# 3. 執行腳本
python scripts/generate_ppt.py
python scripts/generate_content_file.py
```

**POST_CONFIG 設定**：
```python
POST_CONFIG = {
    'date': '2025-12-12',           # 發文日期
    'type': '個人成長',              # 醫學 / 故事 / 個人成長
    'title': '沒有姓名的值班機器',   # 貼文標題
}
```

腳本會自動：
- ✅ 創建資料夾：`outputs/IG貼文/YYYY-MM-DD-IG貼文-類型-標題/`
- ✅ 生成 PPT 檔案：`[標題]_草稿.pptx`
- ✅ 生成內容檔案：`[標題]_內容.txt`

---

## 📋 工作流程

### IG 貼文完整流程

1. **腳本設定**
   - 編輯 `scripts/generate_ppt.py` 的 POST_CONFIG
   - 編輯 `scripts/generate_content_file.py` 的 POST_CONFIG

2. **執行腳本**
   ```bash
   python scripts/generate_ppt.py
   python scripts/generate_content_file.py
   ```

3. **生成 AI 封面圖**
   - 使用 `_內容.txt` 中的 AI prompt
   - 在 Midjourney/DALL-E 生成圖片
   - 儲存為 `[標題]_封面.png`

4. **Canva 製作**
   - 匯入 `_草稿.pptx` 到 Canva
   - 替換 Slide 1 背景為 AI 圖片 + 加遮罩
   - 替換 Slide N 為固定封底模板
   - 檢查文字、浮水印

5. **匯出發布**
   - 從 Canva 匯出為 PNG（1080x1080px）
   - 儲存為 `[標題]_01.png` ~ `_08.png`
   - 上傳到 IG，配上 Caption
   - 記錄在 `content-hub/archive/`

---

## 🗂️ 檔案命名規則總結

| 檔案類型 | 命名格式 | 範例 |
|---------|---------|------|
| IG 資料夾 | `YYYY-MM-DD-IG貼文-類型-標題` | `2025-12-12-IG貼文-個人成長-沒有姓名的值班機器` |
| PPT 草稿 | `[標題]_草稿.pptx` | `沒有姓名的值班機器_草稿.pptx` |
| 文字內容 | `[標題]_內容.txt` | `沒有姓名的值班機器_內容.txt` |
| AI 封面 | `[標題]_封面.png` | `沒有姓名的值班機器_封面.png` |
| 完成圖片 | `[標題]_NN.png` | `沒有姓名的值班機器_01.png` |
| 文章資料夾 | `YYYY-MM-DD-文章-標題` | `2025-12-15-文章-如何建立個人品牌` |
| Markdown | `[標題].md` | `如何建立個人品牌.md` |
| Metadata | `[標題]_meta.txt` | `如何建立個人品牌_meta.txt` |

---

## 💡 注意事項

1. **統一使用中文**
   - 所有檔案名稱、資料夾名稱都使用中文
   - 便於辨識與管理

2. **日期格式**
   - 統一使用 `YYYY-MM-DD` 格式
   - 便於排序與查找

3. **類型固定**
   - IG 貼文類型只有三種：`醫學`、`故事`、`個人成長`
   - 不要使用其他名稱

4. **資料夾完整性**
   - 每個貼文資料夾應包含完整的製作與成果檔案
   - 方便未來回溯與參考

5. **Git 管理**
   - 草稿檔案（.pptx, .txt）建議提交到 Git
   - 完成圖片（.png）檔案較大，可考慮 .gitignore

---

**最後更新**：2025-12-12
**維護者**：Project Manager
**版本**：1.0
