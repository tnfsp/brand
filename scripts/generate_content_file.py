# -*- coding: utf-8 -*-
"""
生成 IG 貼文內容文字檔案
"""
import os
from datetime import datetime

# ==================== 貼文資訊配置 ====================
POST_CONFIG = {
    'date': '2025-12-12',
    'type': '個人成長',  # 醫學 / 故事 / 個人成長
    'title': '沒有姓名的值班機器',
    'caption': '''最近接到學弟妹的會診電話，越來越常聽到這樣的開場：「喂，我是某某樓層的值班醫師...」

不是張醫師、不是李醫師，只是「值班醫師」。

什麼時候開始，我們連名字都不說了？也許是工作壓力讓我們麻木了，也許是害怕被記住、被針對，或是醫療文化告訴我們，職位比人更重要。

當我們失去名字，我們從「人」變成了「功能」，從「張醫師」變成「值班機器」。這是保護機制，還是我們付出的代價？

你不只是一台值班機器。記得說出你的名字，下次打電話時，介紹你自己。在體制中，不失去自己。

後話

其實這篇已經存在電腦裡面很久了，一直沒有時間跟大家分享。

一開始養成這個習慣是看到老師跟學長說：「你沒有說名字，我怎麼知道你是誰？」後來自己當了學長也開始觀察到這個現象。

對我來說，具名不只是禮貌，更是代表我願意為我的言行負責任，也是我們在醫院建立個人名聲的方式。

有學弟妹說，覺得自己是誰沒有人在乎，但你自己都不在乎了，誰會在乎！

下次打電話時，試試看介紹你自己，或許會有意想不到的收穫！''',
    'slides': [
        {
            'number': 1,
            'type': '封面',
            'content': {
                'title': '沒有姓名的值班機器',
                'subtitle': 'PART 1',
                'note': '[請替換此投影片背景為 AI 生成的圖片]\n然後加上橘色半透明遮罩（#CA6702, 70-75% 透明度）'
            }
        },
        {
            'number': 2,
            'type': '內容',
            'content': '「喂，我是某某樓層的值班醫師...」'
        },
        {
            'number': 3,
            'type': '內容',
            'content': '''不是張醫師
不是李醫師
不是王醫師

只是「值班醫師」'''
        },
        {
            'number': 4,
            'type': '內容',
            'content': '''什麼時候開始
我們連名字都不說了？

接到學弟妹的會診電話
越來越常聽到這樣的開場
職位代替了姓名
功能取代了身份'''
        },
        {
            'number': 5,
            'type': '內容',
            'content': '''為什麼會這樣？

也許是...

工作壓力太大
慢慢麻木了

害怕被記住
避免被針對

或是醫療文化告訴我們
職位比人更重要'''
        },
        {
            'number': 6,
            'type': '內容',
            'content': '''當我們失去名字
我們失去了什麼？

從「人」變成「功能」
從「張醫師」變成「值班機器」

這是保護機制
還是我們付出的代價？'''
        },
        {
            'number': 7,
            'type': '結尾內容',
            'content': '''你不只是一台值班機器

記得說出你的名字

下次打電話時
介紹你自己

在體制中
不失去自己'''
        },
        {
            'number': 8,
            'type': '封底',
            'content': '[使用你的固定封底模板]\n\n完全不需要更動'
        }
    ],
    'ai_prompt': '''Oil painting style, warm orange and golden tones, a bear in medical scrubs holding a phone or making a phone call in a hospital corridor, faceless or blurred features, melancholic and introspective atmosphere, impressionist brushstrokes, muted colors, sense of anonymity and loss of identity, soft lighting'''
}

# 自動生成資料夾路徑
folder_name = f"{POST_CONFIG['date']}-IG貼文-{POST_CONFIG['type']}-{POST_CONFIG['title']}"
output_dir = os.path.join('outputs', 'IG貼文', folder_name)

# 創建資料夾
os.makedirs(output_dir, exist_ok=True)

# 生成內容文字檔案
content_file = os.path.join(output_dir, f"{POST_CONFIG['title']}_內容.txt")

# 組織內容
content = f"""# IG 貼文內容：{POST_CONFIG['title']}

## 基本資訊
- **主題**：{POST_CONFIG['type']}
- **日期**：{POST_CONFIG['date']}
- **張數**：{len(POST_CONFIG['slides'])} 張

---

## Caption

{POST_CONFIG['caption']}

---

## 投影片內容

"""

# 添加每張投影片的內容
for slide in POST_CONFIG['slides']:
    content += f"### Slide {slide['number']} - {slide['type']}\n"

    if isinstance(slide['content'], dict):
        # 封面格式
        if 'title' in slide['content']:
            content += f"**主標題**：{slide['content']['title']}\n"
        if 'subtitle' in slide['content']:
            content += f"**副標題**：{slide['content']['subtitle']}\n"
        if 'note' in slide['content']:
            content += f"**背景**：{slide['content']['note']}\n"
    else:
        # 一般內容
        content += f"{slide['content']}\n"

    content += "\n---\n\n"

# 添加 AI 圖片生成 prompt
content += f"""## AI 圖片生成 Prompt

{POST_CONFIG['ai_prompt']}

---

## 製作流程

1. **生成 AI 封面圖片**
   - 使用上方 prompt 在 Midjourney/DALL-E/Stable Diffusion 生成
   - 選擇符合調性的圖片

2. **匯入 PPT 到 Canva**
   - 將 `{POST_CONFIG['title']}_草稿.pptx` 匯入 Canva
   - Slide 1：替換背景為 AI 圖片，加上遮罩
   - Slide 8：替換為你的固定封底模板
   - 檢查所有浮水印位置正確

3. **匯出並發布**
   - 從 Canva 匯出為 PNG（1080x1080px）
   - 上傳到 IG，配上 Caption
   - 觀察受眾反應

---

## 檔案位置

- **PPT 檔案**：`{POST_CONFIG['title']}_草稿.pptx`
- **文字檔案**：`{POST_CONFIG['title']}_內容.txt`（本文件）
- **未來將生成**：
  - `{POST_CONFIG['title']}_封面.png`（AI 生成的封面圖）
  - `{POST_CONFIG['title']}_01.png` ~ `_{len(POST_CONFIG['slides']):02d}.png`（從 Canva 匯出的完成圖）

---

生成時間：{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
生成者：Project Manager + IG-Visual Agent
"""

# 寫入檔案
with open(content_file, 'w', encoding='utf-8') as f:
    f.write(content)

print(f'Content file generated successfully!')
print(f'File saved: {content_file}')
