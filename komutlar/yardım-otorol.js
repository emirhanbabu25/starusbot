const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
const exampleEmbed = new Discord.MessageEmbed()  
.setColor('#fff000 ')
.addField('**Otorol Sistemi**','**s!oto-rol-ayarla**  **Otorolü Ayarlar.**\n <a:krmzelmas:764099211536760845> Örnek: `s!oto-rol-ayarla @rolünüz #logkanalı` \n \n **s!oto-rol-msg ** **Otorol Mesajını Ayarlar. **\n <a:krmzelmas:764099211536760845> Örnek: `s!oto-rol-msg -server-, Sunucumuza Hoşgeldin, -uye-! -rol- Adlı Rolün Başarı İle Verildi Seninle Beraber, **-uyesayisi-** Kişiyiz`')

  .addField('**Kullanabileceğiniz Değişkenler**',`
-uye- **Kişiyi Doğrudan Etiketler.**

-uyetag- **Kişinin Adını Ve Etiketini Atar.**

-rol- **Otorolde Belirlenmiş Olan Rolü Atar.**

-server- **Sunucu İsmini Atar.**

-uyesayisi- **Sunucuda Olan Üyeleri Sayar Ve Onu Mesaja Döker.**
`)
.setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL())
.setTimestamp()
message.channel.send(exampleEmbed); 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'otorol',
  description: 'sayaç', 
  usage: 'sayaç'
};
