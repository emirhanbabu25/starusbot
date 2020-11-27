const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("#fff000")
.setTitle("Kullanıcı Menüsü")
 .setTimestamp()  
.addField("<a:ayarlar:761707206843564032> s!davet",        `**:white_small_square: Botun Davet Linki.**`,)
.addField("<a:ayarlar:761707206843564032> s!hata-bildir",  `**:white_small_square: Botumuzun Hatasını Bildirirsiniz.**`,)
.addField("<a:ayarlar:761707206843564032> s!istek-bilgi",  `**:white_small_square: Botumuza İstek Komut Önerirsiniz.**`)
.addField("<a:ayarlar:761707206843564032> s!say",          `**:white_small_square: Sunucundaki Üye Sayısını Sayar.**`,)
.addField("<a:ayarlar:761707206843564032> s!sunucu-bilgi", `**:white_small_square: Suncunun Bilgilerini Gösterir.**`,)
.addField("<a:ayarlar:761707206843564032> s!ping",         `**:white_small_square: Botun Gecikmesini Gösterir.**`,)
.addField("<a:ayarlar:761707206843564032> s!profil",       `**:white_small_square: Profilini Gösterir.**`,)
.addField("<a:ayarlar:761707206843564032> s!id",           `**:white_small_square: İstediğiniz Kişinin İd'sini Görürsünüz.**`,)
.addField("<a:ayarlar:761707206843564032> s!avatar",       `**:white_small_square: Etiket Atığınız Kişinin Avatarını Gösterir.**`,)
.addField("<a:ayarlar:761707206843564032> s!banlananlar",  `**:white_small_square: Banlananları görürsünüz.**`,)
.addField("<a:ayarlar:761707206843564032> s!emojiler",     `**:white_small_square: Sunucudaki Emojileri Gösterir.**`,)
.addField("<a:ayarlar:761707206843564032> s!rol-bilgi",    `**:white_small_square: Etiketlediginiz Rol Hakkında Bilgi Verir.**`,)
.addField("<a:ayarlar:761707206843564032> s!roller",       `**:white_small_square: Sunucudaki Rolleri Gösterir.**`,)
.addField("<a:ayarlar:761707206843564032> s!yaz",          `**:white_small_square: Bottan Yazı Yazarsınız.**`,)

.addField("<a:krmzelmas:764099211536760845> Davet Linki", ` \n[Davet Et](https://discord.com/oauth2/authorize?client_id=744990839339483276&scope=bot&permissions=8)` + "**  **" + `\n[Destek Sunucusu](https://discord.gg/c6DgZfvQZ6) `, false)
.setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL())
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: true, 
   aliases: ["Yaz",],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'kullanıcı',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}