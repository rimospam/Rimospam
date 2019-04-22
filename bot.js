const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("569069161859252236")
setInterval(function() {
channel.send(`Spam For Credit`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
