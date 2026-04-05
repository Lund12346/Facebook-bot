module.exports.config = {
  name: "help",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "Addie",
  description: "VIP Help Menu",
  commandCategory: "system",
  usages: "[command]",
  cooldowns: 5,
  envConfig: { autoUnsend: true, delayUnsend: 300 }
};

module.exports.run = async function ({ api, event, args }) {
  const { commands } = global.client;
  const { threadID, messageID } = event;

  if (!args[0]) {
    const arrayInfo = [];
    for (var [name, value] of commands) {
      arrayInfo.push(name);
    }
    arrayInfo.sort();

    let msg = "╭─────────────╮\n       ♛  𝐕𝐈𝐏 𝐁𝐎𝐓 𝐌𝐄𝐍𝐔  ♛\n╰─────────────╯\n\n";
    for (let item of arrayInfo) {
      msg += ` ✨ ❯ ${item}\n`;
    }

    const total = arrayInfo.length;
    const footer = `\n━━━━━━━━━━━━━━━\n👑 𝐎𝐰𝐧𝐞𝐫 :  𝐀𝐝𝐝𝐢𝐞\n📊 𝐓𝐨𝐭𝐚𝐥 :  ${total} 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬\n📝 𝐔𝐬𝐚𝐠𝐞 :  +𝐡𝐞𝐥𝐩 [𝐧𝐚𝐦𝐞]\n━━━━━━━━━━━━━━━`;

    return api.sendMessage(msg + footer, threadID, (error, info) => {
      if (error) console.log(error);
    }, messageID);
  }

  // Specific command detail agar koi "+help [command]" likhe
  const command = commands.get(args[0].toLowerCase());
  if (!command) return api.sendMessage("❌ Ye command list mein nahi hai!", threadID, messageID);

  const { name, description, usages, commandCategory, cooldowns } = command.config;
  let detailMsg = `╭──────•◈•──────╮\n     💎 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐈𝐍𝐅𝐎 💎\n╰──────•◈•──────╯\n\n`;
  detailMsg += `🆔 𝐍𝐚𝐦𝐞 : ${name}\n`;
  detailMsg += `📂 𝐂𝐚𝐭𝐞𝐠𝐨𝐫𝐲 : ${commandCategory}\n`;
  detailMsg += `📝 𝐃𝐞𝐬𝐜 : ${description}\n`;
  detailMsg += `🎮 𝐔𝐬𝐚𝐠𝐞 : ${usages}\n`;
  detailMsg += `⏳ 𝐂𝐨𝐨𝐥𝐝𝐨𝐰𝐧 : ${cooldowns}s\n\n`;
  detailMsg += `━━━━━━━━━━━━━━━\n👑 𝐌𝐚𝐝𝐞 𝐁𝐲 : 𝐀𝐝𝐝𝐢𝐞`;

  return api.sendMessage(detailMsg, threadID, messageID);
};
