const Discord = require('discord.js');
const db = require("quick.db")

  exports.run = async(client, message, args) => {
 //if(!message.member.roles.cache.has("ROL İD")) return message.reply("Gerekli yetkiye sahip değilsin")   
       
  let xnox = message.mentions.members.first()
  if (!xnox) return message.reply(`Kadın rolü verilecek üyeyi belirtmelisin!`);
  let kadınrol = "806580932940529665";
  xnox.roles.add(kadınrol);
  db.add(`kız_${message.author.id}_${message.guild.id}`, "1")
  db.set(`kadınkayıteden_${xnox.id}`, message.author.id)
  message.channel.send(`<@${message.author.id}> **kayıt işlemi tamamlanmıştır. Kayıt edilen kullanıcı:** <@${xnox.user.id}> `);
  }
   


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'ks'
};