const Discord = require("discord.js")
const db = require("quick.db")
const fs = require('fs')
const yaml = require("js-yaml");
const { re } = require("mathjs");// made byy darkboy
const { mainprefix , token } = yaml.load(fs.readFileSync("./config.yml"));

module.exports = {
    name: "delete",
    description: "delete",
    run: async (client, message, args) => {
        let prefix = await db.get(`prefix_${message.guild.id}`);
        if(prefix === null) prefix = mainprefix;
      
        let projectname = args[0]
        if (!projectname) return message.channel.send(`${prefix}delete + **{project Link}** `);
        let database = db.get(`projects_${message.author.id}`)
        if(database) {
            let data = database.find(x => x.project === projectname)
            if(!data) return message.channel.send("Unfortunately, this link does not exist :x:")
            let value = database.indexOf(data)
            delete database[value]
            var filter = database.filter(x => {
                return x !== null && x !== ''
            })
            db.set(`projects_${message.author.id}`, filter)
            return message.channel.send(`**${projectname}** delete project + uptimer`)
        } else {
            return message.channel.send(`I'm sorry, but with this link you don't have to type (${prefix}delete) to see how many links you have`)

        }
    }
}