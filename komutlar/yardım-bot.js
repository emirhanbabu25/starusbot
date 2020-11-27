 const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("#fff000")
.setTitle("Bot Menüsü")
 .setTimestamp()
.addField("<a:ayarlar:761707206843564032> s!ayarlar",      `:white_small_square: **Sunucunuzdaki Açık veya Kapalı Komutları Gösterir.**`,)
.addField("<a:ayarlar:761707206843564032> s!ping",         `:white_small_square: **Botun Gecikmesini Gösterir.**`,)
.addField("<a:ayarlar:761707206843564032> s!davet",        `:white_small_square: **Botun Davet Linki.**`,)
.addField("<a:ayarlar:761707206843564032> s!prefix",       `:white_small_square: **Botun Prefix'ini Değişdirirsiniz.**`,)
.addField("<a:ayarlar:761707206843564032> s!hata-bildir",  `:white_small_square: **Botun Hatasını Bildirirsiniz.**`,)
.addField("<a:ayarlar:761707206843564032> s!istek-bilgi",  `:white_small_square: **Botumuza İstek Komut Önerirsiniz.**`,)

.addField("<a:krmzelmas:764099211536760845> Linkler", ` \n[Davet Et](https://discord.com/oauth2/authorize?client_id=744990839339483276&scope=bot&permissions=8)` + "**  **" + `\n[Destek Sunucusu](https://discord.gg/c6DgZfvQZ6) `, false)
.setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL())
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["Bot","bot"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'Bot',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}