const moment = require('moment');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {

   
  
  client.user.setStatus("online");
  client.user.setActivity(`xnox#0007 `);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);


};