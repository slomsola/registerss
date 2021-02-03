const Discord = require('discord.js');
const db= require('quick.db');
exports.run = async (client, message, args) => {
     //if(!message.member.roles.cache.has("ROL İD")) return message.reply("Gerekli yetkiye sahip değilsin")   
  let xnox = message.mentions.members.first() 
  if (!xnox) return message.reply(`Erkek rolü verilecek üyeyi belirtmelisin!`);
  let bilgi = db.fetch(`erkekkayıteden_${xnox.id}`)
  message.channel.send(`<@${xnox.user.id}> kayıt eden yetkili <@${bilgi}>`)
}
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
   
  exports.help = {
    name: 'kayıteden',

  };