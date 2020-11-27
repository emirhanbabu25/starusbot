const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("#fff000")
.setTitle("Moderasyon 2 Menüsü")
 .setTimestamp()  
.addField("<a:ayarlar:761707206843564032> s!çekiliş",               `:white_small_square: **Çekiliş Yaparsın.**`,)
.addField("<a:ayarlar:761707206843564032> s!slow-mode",             `:white_small_square: **Yavaş Modu Açarsın.**`,)
.addField("<a:ayarlar:761707206843564032> s!sohbet-aç/kapat",       `:white_small_square: **Herkese Yazmayı Açar Ve Kapatırsınız.**`,)
.addField("<a:ayarlar:761707206843564032> s!oto-tag-ayarla/kapat",  `:white_small_square: **Sunucuya Gelenlere Otomatik Tag Verir.**`,)
.addField("<a:ayarlar:761707206843564032> s!isim-değiştir",         `:white_small_square: **İstediğiniz Kullanıcının İsmini Değiştirirsiniz.**`,)
.addField("<a:ayarlar:761707206843564032> s!oylama",                `:white_small_square: **Oylama Yaparsınız.**`,)
.addField("<a:ayarlar:761707206843564032> s!emojikopyala",          `:white_small_square: **Emoji Kopylarsınız.**`,)
.addField("<a:ayarlar:761707206843564032> s!kurallar",              `:white_small_square: **Hazır Kurallar Atar.**`,)
.addField("<a:ayarlar:761707206843564032> s!kanalaçıklama",         `:white_small_square: **Kanalın Açıklamasını Değiştirir.**`,)
.addField("<a:ayarlar:761707206843564032> s!nuke",                  `:white_small_square: **Yazdığınız Kanalı Silip Geri Açar..**`,)


.addField("<a:krmzelmas:764099211536760845> Linkler", ` \n[Davet Et](https://discord.com/oauth2/authorize?client_id=744990839339483276&scope=bot&permissions=8)` + "**  **" + `\n[Destek Sunucusu](https://discord.gg/c6DgZfvQZ6) `, false)
.setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL())
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: true, 
   aliases: ["Moderasyon2","mod2"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'moderasyon2',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}