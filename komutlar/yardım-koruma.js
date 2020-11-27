const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("#fff000")
.setTitle("Koruma Menüsü")
 .setTimestamp()
.addField("<a:ayarlar:761707206843564032> s!everyone-here-engel",    `:white_small_square: **Sunucuzda Ever Here Atamazlar.**`,)
.addField("<a:ayarlar:761707206843564032> s!mod-log-ayarla/sıfırla", `:white_small_square: **sunucu Kayıtlarının Atılacağı Kanalı Belirler.**`,)
.addField("<a:ayarlar:761707206843564032> s!kanal-koruma",           `:white_small_square: **Kanal Koruma Sistemi.**`,)
.addField("<a:ayarlar:761707206843564032> s!reklam-kick",            `:white_small_square: **Reklam Yapanı Kickler.**`,)


.addField("<a:krmzelmas:764099211536760845> Linkler", ` \n[Davet Et](https://discord.com/oauth2/authorize?client_id=744990839339483276&scope=bot&permissions=8)` + "**  **" + `\n[Destek Sunucusu](https://discord.gg/c6DgZfvQZ6) `, false)
.setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL())
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["koruma",],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'koruma',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}