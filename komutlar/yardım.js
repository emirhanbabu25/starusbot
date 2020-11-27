const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("#fff000")
.setTitle("Yardım Menüsü")
 .setTimestamp()
.addField("<a:ayarlar:761707206843564032> s!moderasyon",      `:white_small_square: Moderasyon Komutlarını Gösteir.`,)
.addField("<a:ayarlar:761707206843564032> s!moderasyon2",     `:white_small_square: Moderasyon 2 Komutlarını Gösteir.`,)
.addField("<a:ayarlar:761707206843564032> s!koruma",          `:white_small_square: Koruma Komutlarını Gösterir.`,)
.addField("<a:ayarlar:761707206843564032> s!kullanıcı",    `:white_small_square: Kullanıcı Komutlarını Gösterir.`,)
.addField("<a:haypesquad:761707034209943583> s!eğlence",       `:white_small_square: Eğlence Komutlarını Gösterir.`,)
.addField("<a:haypesquad:761707034209943583> s!logo",          `:white_small_square: Logo Komutlarını Gösterir.`,)
.addField("<a:ayarlar:761707206843564032> s!bot",          `:white_small_square: Bot Komutlarını Gösterir.`,)
.addField("<a:ayarlar:761707206843564032> s!eklenti",      `:white_small_square: Eklenti Komutlarını Gösterir.`,)

.addField("<a:krmzelmas:764099211536760845> Linkler", ` \n[Davet Et](https://discord.com/oauth2/authorize?client_id=744990839339483276&scope=bot&permissions=8)` + "**  **" + `\n[Destek Sunucusu](https://discord.gg/c6DgZfvQZ6) `, false)
.setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL())
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["help","y"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'yardım',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}