module.exports.config = { name: "test", version: "1.0.0", hasPermssion: 0, credits: "Addie", description: "testing bot", commandCategory: "system", usages: "", cooldowns: 5 };
module.exports.run = async ({ api, event }) => {
    return api.sendMessage("Bot Zinda Hai! ✅", event.threadID, event.messageID);
};
