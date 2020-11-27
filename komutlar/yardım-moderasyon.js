const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("#fff000")
.setTitle("Moderasyon Menüsü")
 .setTimestamp()  
.addField("<a:ayarlar:761707206843564032> s!otorol",   `:white_small_square: **Otorol Sistemi.**`,)
.addField("<a:ayarlar:761707206843564032> s!çekiliş",  `:white_small_square: **Çekiliş Sistemi**`,)
.addField("<a:ayarlar:761707206843564032> s!sayaç",    `:white_small_square: **Sayaç Sistemi.**`,)
.addField("<a:ayarlar:761707206843564032> s!reklam",   `:white_small_square: **Sunucunda Reklam Yapamazlar.**`,)
.addField("<a:ayarlar:761707206843564032> s!küfür",    `:white_small_square: **Sunucuda Küfür Edemezler.**`,)
.addField("<a:ayarlar:761707206843564032> s!ban",      `:white_small_square: **Etiket Atıgın Kişi Banlanır**`,)
.addField("<a:ayarlar:761707206843564032> s!unban",    `:white_small_square: **Id'sini Yazdıgın Kişinin Banı Açılır**`,)
.addField("<a:ayarlar:761707206843564032> s!sil",      `:white_small_square: **Mesajlarınızı Siler.**`,)
.addField("<a:ayarlar:761707206843564032> s!kick",     `:white_small_square: **Sunucudan Kicklersiniz.**`,)
.addField("<a:ayarlar:761707206843564032> s!sa-as",    `:white_small_square: **Sa As Sistemini açarsınız**`,)
.addField("<a:ayarlar:761707206843564032> s!embed",    `:white_small_square: **Embed Şekilde Yazarsın**`,)
.addField("<a:ayarlar:761707206843564032> s!rol-al",   `:white_small_square: **Etiketleyerek Rol Alırsınız.**`,)
.addField("<a:ayarlar:761707206843564032> s!rol-ver",  `:white_small_square: **Etiketleyerek Rol Verir.**`,)

.addField("<a:krmzelmas:764099211536760845> Linkler", ` \n[Davet Et](https://discord.com/oauth2/authorize?client_id=744990839339483276&scope=bot&permissions=8)` + "**  **" + `\n[Destek Sunucusu](https://discord.gg/c6DgZfvQZ6) `, false)
.setFooter(`Menüyü ${message.author.username} istedi .`, message.author.avatarURL)
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: true, 
   aliases: ["Moderasyon","mod"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'moderasyon',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}