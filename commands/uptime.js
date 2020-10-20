const Discord = require("discord.js")
const db = require("quick.db")
const fs = require('fs')
const yaml = require("js-yaml");
const { mainprefix , token } = yaml.load(fs.readFileSync("./config.yml"));

module.exports = {
    name: "uptime",
    description: "Show bot stats",
    run: async (client, message, args) => {
  let args2 = args[0]
  let prefix = await db.get(`prefix_${message.guild.id}`);
  if(prefix === null) prefix = mainprefix;
  let wrongusage = new Discord.MessageEmbed()
  .setTitle(`** Wrong Usage**`)
  .setDescription(`Exmaple: ${prefix}uptime (Project Link)`)
 if(!args2) return message.channel.send(`** glitch or repl.it ️️♾️  **\n${prefix}uptime + (Link) = 24 hours`);
 let database = db.get(`projects_${message.author.id}`)

 if(database && database.find(x => x.project === args2)) return message.channel.send("This link already exists **⚙️ لو مو شغال شوف لو في البروجكت ايرور**")
 const checks = db.fetch(`projects_${message.author.id}`)
 console.log(checks)
 const log = {
   project: args2
 }
 db.push(`projects_${message.author.id}`, log) 
return message.channel.send(`{**${args2}**} The project link is now added 
{ ***https://uptimer-robot.glitch.me/***  } ذا رابط دخول البوت الي سيرفرك`)
 db.push("DarkUpTime", { url: args2})
}
}
