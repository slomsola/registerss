const Discord = require('discord.js');
exports.run = async(client, message, args) => {
    //if(!message.member.roles.cache.has("ROL İD")) return message.reply("Gerekli yetkiye sahip değilsin")  
    let xnox = message.mentions.members.first() 
  if (!xnox) return message.reply(`Üyeyi belirtmelisin!`);
  let nicki = args[1]
  let yaş = args.slice(2).join(' ');
    xnox.setNickname(`${nicki} | ${yaş} `)
    message.channel.send(`<@${message.author.id}> **kayıt işlemi tamamlanmıştır. yeni ismi** \`${nicki} | ${yaş}\` `);
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: []
}

exports.help = {
  name: 'tag'
};