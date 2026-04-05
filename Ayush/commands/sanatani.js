const axios = require("axios");
const fs = require("fs");
const path = require("path");

const triggerWords = [
  "hello", "hi", "radhe radhe", "jai shree ram",
  "har har mahadev", "namah shivay", "jai siya ram",
  "jay shri ram", "ram ram", "radhe krishna", "bolo ram ram"
];

const sanataniReplies = [
  "╔═════════════ஜ۩۞۩ஜ═════════════╗\n🕉️ *Har Har Mahadev!* 🔱\n╚═════════════ஜ۩۞۩ஜ═════════════╝",
  "┏━━━━━━━━━━━━━┓\n🌺 *Radhe Radhe!* 🙏\n┗━━━━━━━━━━━━━┛",
  "╭═══🚩════ஜ۩۞۩ஜ════🚩═══╮\n*🚩 Jai Shree Ram!* 🔥\n╰═══🚩════ஜ۩۞۩ஜ════🚩═══╯",
  "✦••┈┈┈┈ *Jai Siya Ram!* 🌼 ┈┈┈┈••✦",
  "╒═════⟪ॐ⟫═════╕\n*🕉️ Namah Shivay!* 🌙\n╘═════⟪ॐ⟫═════╛",
  "🌸〘 *Bhagwan ka naam lo, sab theek ho jaayega.* 🌞 〙",
  "🌿╭────────────╮🌿\n*🚩 Ram Ram Bhai Sabko!* 🛕\n🌿╰────────────╯🌿",
  "❁❁❁ *Radha Krishna ki kripa bani rahe!* 💫 ❁❁❁",
  "🚩〘 Shiv Shambhu Sabka Kalyan Karen! 🔥 〙🕉️"
];

const sanataniMediaLinks = [
  "https://i.imgur.com/0H0hKQB.jpg",
  "https://i.imgur.com/zEy3qgR.jpg",
  "https://i.imgur.com/hXM2uG3.jpg",
  "https://i.imgur.com/nmKM0xU.mp4",
  "https://i.imgur.com/XcoA3B7.jpg",
  "https://i.imgur.com/ufWWQZz.jpg",
  "https://i.imgur.com/FiX2MBy.mp4",
  "https://i.imgur.com/Ob1t8Vo.jpg",
  "https://i.imgur.com/8jX9uQe.jpg"
];

module.exports.config = {
  name: "sanatani",
  version: "3.1",
  hasPermssion: 0,
  credits: "Ayush Modified",
  description: "Sanatani auto reply with image/video",
  commandCategory: "spiritual",
  usages: "auto",
  cooldowns: 2
};

module.exports.handleEvent = async ({ api, event }) => {
  try {
    const msg = event.body?.toLowerCase();
    if (!msg) return;

    if (!triggerWords.some(w => msg.includes(w))) return;

    const replyText = sanataniReplies[Math.floor(Math.random() * sanataniReplies.length)];
    const mediaUrl = sanataniMediaLinks[Math.floor(Math.random() * sanataniMediaLinks.length)];
    const ext = mediaUrl.endsWith(".mp4") ? ".mp4" : ".jpg";
    const filePath = path.join(__dirname, `/cache/sanatani${ext}`);

    if (!fs.existsSync(path.dirname(filePath)))
      fs.mkdirSync(path.dirname(filePath), { recursive: true });

  
  } catch (err) {
    console.error("❌ Sanatani module error:", err.message);
  }
};

module.exports.run = async () => {};
