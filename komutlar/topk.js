const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {
//if(!message.member.roles.cache.has("ROL İD")) return message.reply("Gerekli yetkiye sahip değilsin")  
let erkek = db.fetch(`erkek_${message.author.id}_${message.guild.id}`)
let kız = db.fetch(`kız_${message.author.id}_${message.guild.id}`)
let toplam = erkek+kız
const xnoxmod = new Discord.MessageEmbed()
.addField(`Toplam Erkek:`,`${erkek ? erkek:'yok'}`)
.addField(`Toplam kız:`,`${kız ? kız : 'yok'} `)
.addField(`Toplam kayıt:`,`${toplam ? toplam : 'yok'}`)
message.channel.send(xnoxmod)
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: []
};
exports.help = {
     name: 'top' 
    };