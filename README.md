# Personal Dashboard & Live Clock Website ⏱️✨

A modern, responsive, and customizable personal web dashboard featuring a live real-time digital clock, analog watchface, multi-timezone converter, day cycle progress tracker, dynamic aesthetic themes, and personal productivity widgets.

---

## 🌐 Live Demo

- **Local Live Demo URL**: [http://localhost:8080](http://localhost:8080)
- **Direct Access**: Open [`index.html`](./index.html) directly in any modern browser.

---

## 🚀 Features

- **👤 Editable Profile Hero**:
  - Displays user's name (**Lin Jin De**), editable bio, and online status.
  - Dynamically updates time-of-day greeting (*Good Morning 🌅*, *Good Afternoon ☀️*, *Good Evening 🌆*, *Late Night 🌙*).
  - Prominent hero live clock & date banner.

- **⏱️ Dual Clock Engine**:
  - **Futuristic Digital Clock**: Displays hours, minutes, seconds, AM/PM, and full weekday date.
  - **Minimalist Analog Clock**: Live SVG watchface with smooth rotating hands.
  - **12H / 24H Toggle**: Instant switch between 12-hour and 24-hour time formats.

- **🌍 Timezone Converter**:
  - Select between Local Time, UTC, New York (EDT/EST), London (BST/GMT), Tokyo (JST), Shanghai/Beijing (CST), and Sydney (AEST).
  - Automatically calculates UTC offset badges.

- **☀️ Day Cycle Progress Tracker**:
  - Real-time progress bar indicating the percentage of the day completed.

- **🎨 4 Aesthetic Themes**:
  - **Cyber Dark**: Neon Indigo & Pink Glassmorphism.
  - **Aurora Glass**: Teal & Cyan Glow.
  - **Sunset Glow**: Rose & Gold Sunset.
  - **Minimal Light**: Clean Light Slate.

- **📝 Productivity Widgets**:
  - **Today's Main Focus**: Checkable daily goal input.
  - **Quick Notepad**: Auto-saves your notes directly to browser `localStorage`.
  - **Quick Connect**: Social links for GitHub, LinkedIn, Email, and Twitter.

---

## 🛠️ Technology Stack

- **Core**: Semantic HTML5
- **Styling**: Vanilla CSS3 (Custom Properties, Glassmorphism, CSS Grid & Flexbox, Ambient Animations)
- **Logic**: Vanilla JavaScript (ES6+, DOM Manipulation, LocalStorage, `Intl.DateTimeFormat`)
- **Typography & Icons**: Google Fonts (*Outfit* & *JetBrains Mono*), FontAwesome 6

---

## 💻 Getting Started

### Option 1: Serve via Python HTTP Server
Run the following command in the project directory:

```bash
python -m http.server 8080
```

Then open your browser and navigate to:
`http://localhost:8080`

### Option 2: Open HTML Directly
Simply double-click `index.html` or drag it into any modern web browser.

---

## 📁 File Structure

```
d:/L2/
├── index.html     # Semantic HTML layout and component markup
├── styles.css     # CSS custom design system, themes, animations, glassmorphism
├── app.js         # JavaScript app engine, clock ticking, timezone & persistence
└── README.md      # Project documentation
```

---

## 📄 License

Created with Precision & Style for **Lin Jin De**.
