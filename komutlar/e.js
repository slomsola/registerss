const Discord = require('discord.js');
const db = require("quick.db")
  exports.run = async(client, message, args) => {
   //if(!message.member.roles.cache.has("ROL İD")) return message.reply("Gerekli yetkiye sahip değilsin")  
  let xnox = message.mentions.members.first() 
  if (!xnox) return message.reply(`Erkek rolü verilecek üyeyi belirtmelisin!`);
  let erkekrol = "806580898119417866";
  xnox.roles.add(erkekrol);
  db.add(`erkek_${message.author.id}_${message.guild.id}`, "1")
  db.set(`erkekkayıteden_${xnox.id}`, message.author.id)
    message.channel.send(`<@${message.author.id}> **kayıt işlemi tamamlanmıştır. Kayıt edilen kullanıcı:**<@${xnox.user.id}>`);
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: []
}

exports.help = {
  name: 'e'
};