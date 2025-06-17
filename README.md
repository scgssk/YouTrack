# YouTube Video Tracker Extension 🎬

Track and resume YouTube videos from where you left off — even after browser restarts!

![Banner](https://img.shields.io/badge/YouTube--YouTrack-Extension-blue)

---

## 🔥 Features

- ⏸️ Automatically tracks when you **pause** a YouTube video
- 🔗 Saves the **video link with timestamp**
- ▶️ Shows a "**Continue Watching**" button for your last video
- 🕘 Lists all previous bookmarks with video title + time
- ❌ Includes a "**Clear All Bookmarks**" button
- 💾 All data stored in **Chrome/Brave extension storage** (not localStorage)

---

## 📦 How to Install (Manual)

1. Click [Download ZIP](https://github.com/scgssk/YouTrack/archive/refs/heads/Master.zip)
2. Extract the folder
3. Open your browser:
   - Go to `chrome://extensions/` (for Chrome)
   - Or `brave://extensions/` (for Brave)
4. Enable **Developer Mode**
5. Click **Load Unpacked**
6. Select the extracted folder

✅ That’s it! It starts working automatically on YouTube.

---

## 🧠 How It Works

- A content script (`content.js`) runs on YouTube
- When you pause a video, it captures the video ID and current time
- Bookmarks are saved in the browser's `chrome.storage.local`
- A popup UI shows the latest bookmark with a "Continue Watching" button
- Older bookmarks are shown as clickable links

---

## 📁 Project Structure

| File             | Purpose                                 |
|------------------|------------------------------------------|
| `manifest.json`  | Chrome Extension Manifest (v3)          |
| `content.js`     | Tracks pause events and saves timestamps |
| `popup.html`     | UI popup interface                      |
| `popup.js`       | Logic to render bookmarks and actions   |
| `style.css`      | Styling for the popup UI                |
| `icon.png`       | Extension icon (placeholder)            |
| `README.md`      | This file                               |

---

## 🧹 Clear Bookmarks

Click the **"Clear All Bookmarks"** button in the popup to erase all saved data.

---

## 🛑 Note for Brave Users

If you're using Brave with “clear site data on exit,” this extension **still works** because it uses **Chrome Extension Storage**, which is **not cleared unless you remove extension data manually**.

---

## 🙌 Contributing

Pull requests are welcome!  
You can also open issues for bugs or feature suggestions.

---

## 📄 License

**MIT License** — Free to use, modify, and distribute.

---
