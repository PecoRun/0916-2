# AIoT-DA 課程 — DIC-1（Do in Class 1）專案說明文件 ⏱️✨

## 📚 課程與實作資訊

- **課程名稱**: AIoT 與數據分析（AIoT & Data Analytics, AIoT-DA）
- **課堂實作**: DIC-1 (Do in Class 1) — 個人入口網站與動態時鐘儀表板（Personal Portal & Live Timekeeper）
- **授課單元**: Lecture 2 — 瀏覽器、現代 Web 核心與非同步資料流（L2Web）
- **示範教師**: Huan Chen
- **示範儲存庫網址**: [https://github.com/huanchen1107/0916-2](https://github.com/huanchen1107/0916-2)
- **示範 Live Demo Page**: [https://huanchen1107.github.io/0916-2/](https://huanchen1107.github.io/0916-2/)
- **學生 Live Demo Page**: [https://pecorun.github.io/0916-2/](https://pecorun.github.io/0916-2/)
- **學生儲存庫網址**: [https://github.com/PecoRun/0916-2](https://github.com/PecoRun/0916-2)

---

## 🌐 專案簡介

本專案為 **AIoT-DA** 課程之 **DIC-1 課堂實作成果**，目標為建構一個現代化、響應式且可自訂的個人入口網站與動態時鐘儀表板，具備即時數位相框時鐘、模擬指針時鐘、多時區轉換器、日光循環進度追蹤、動態視覺主題以及個人生產力小工具。

---

## 🚀 主要功能

- **👤 可編輯個人 Hero 標頭**:
  - 顯示使用者姓名（**Lin Jin De**）、可自訂簡介與線上狀態。
  - 根據當前時段動態更新問候語（*早安 🌅*、*午安 ☀️*、*晚安 🌆*、*深夜模式 🌙*）。
  - 專屬標頭發光即時時鐘與日期橫幅。

- **⏱️ 雙時鐘引擎**:
  - **未來感數位時鐘**: 顯示時、分、秒、AM/PM 及完整星期日期。
  - **極簡模擬指針時鐘**: SVG 時鐘錶盤，具備流暢旋轉的時分秒針。
  - **12H / 24H 切換**: 一鍵即時切換 12 小時制與 24 小時制。

- **🌍 多時區轉換器**:
  - 可於本地時間、UTC、紐約 (EDT/EST)、倫敦 (BST/GMT)、東京 (JST)、上海/北京 (CST) 與雪梨 (AEST) 之間切換。
  - 自動計算並顯示 UTC 時區偏移徽章。

- **☀️ 日光循環進度追蹤**:
  - 即時進度條顯示當天已過去的時間百分比。

- **🎨 4 種視覺主題**:
  - **Cyber Dark (賽博暗夜)**: 霓虹靛藍與粉紅毛玻璃質感。
  - **Aurora Glass (極光玻璃)**: 翡翠綠與晨曦藍光澤。
  - **Sunset Glow (夕陽晚霞)**: 玫瑰紅與橘黃夕陽色彩。
  - **Minimal Light (極簡極白)**: 清爽純淨的淡雅灰藍風格。

- **📝 個人生產力組件**:
  - **今日焦點目標**: 可勾選的每日重要目標輸入框。
  - **快速備忘錄**: 自動將筆記儲存至瀏覽器的 `localStorage`。
  - **快速社群連結**: 包含 GitHub、LinkedIn、Email 與 Twitter 快捷按鈕。

---

## 🛠️ 技術棧

- **核心**: 語意化 HTML5
- **樣式設計**: Vanilla CSS3（CSS 自訂變數、毛玻璃效果 Backdrop-Filter、CSS Grid & Flexbox、動態光暈動畫）
- **應用程式邏輯**: Vanilla JavaScript（ES6+、DOM 操作、LocalStorage 本地持久化、`Intl.DateTimeFormat`）
- **字型與圖示**: Google Fonts (*Outfit* & *JetBrains Mono*)、FontAwesome 6

---

## 💻 快速開始

### 方法一：使用 Python HTTP 伺服器啟動
在專案根目錄中執行以下指令：

```bash
python -m http.server 8080
```

接著開啟瀏覽器並造訪：
`http://localhost:8080`

### 方法二：直接開啟 HTML 檔案
直接雙擊 `index.html` 或將其拖曳至任何現代網頁瀏覽器中即可開啟。

---

## 📁 檔案結構

```
d:/L2/
├── index.html     # 語意化 HTML 結構與組件標記
├── styles.css     # CSS 視覺設計系統、主題變數、光暈動畫與毛玻璃樣式
├── app.js         # JavaScript 主邏輯、時鐘運行、時區計算與資料保存
└── README.md      # 專案課程說明文件
```

---

## 📄 授權與版權

專為 AIoT-DA 課程 **Lin Jin De** 精心打造，兼具精準度與時尚設計。
