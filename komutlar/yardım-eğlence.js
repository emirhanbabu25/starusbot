const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("#fff000")
.setTitle("Eğlence Menüsü")
 .setTimestamp()
.addField("<a:haypesquad:761707034209943583> s!fbi-gif",    `:white_small_square: **FBİ Gif Atar.**`,)
.addField("<a:haypesquad:761707034209943583> s!tersyazı",   `:white_small_square: **Tersden Yazarsınız.**`,)
.addField("<a:haypesquad:761707034209943583> s!öp",         `:white_small_square: **Öpersiniz.**`,)
.addField("<a:haypesquad:761707034209943583> s!tokat",      `:white_small_square: **Tokat Atarsınız.**`,)
.addField("<a:haypesquad:761707034209943583> s!kralol",     `:white_small_square: **Kral Olursunuz.**`,)
.addField("<a:haypesquad:761707034209943583> s!espri",      `:white_small_square: **Espri Yapar.**`,)
.addField("<a:haypesquad:761707034209943583> s!efkarım",    `:white_small_square: **Efkarınızı Ölçer.**`,)
.addField("<a:haypesquad:761707034209943583> s!ara155",     `:white_small_square: **Polisi Ararsınız.**`,)
.addField("<a:haypesquad:761707034209943583> s!balık-tut",  `:white_small_square: **Balık Tutarsınız.**`,)
.addField("<a:haypesquad:761707034209943583> s!taksimdayı", `:white_small_square: **Hello Hawğii.**`,)
.addField("<a:haypesquad:761707034209943583> s!sarıl",      `:white_small_square: **Sarılırsın**`)

.addField("<a:krmzelmas:764099211536760845> Linkler", ` \n[Davet Et](https://discord.com/oauth2/authorize?client_id=744990839339483276&scope=bot&permissions=8)` + "**  **" + `\n[Destek Sunucusu](https://discord.gg/c6DgZfvQZ6) `, false)
.setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL())
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["eğlence","Eğlence"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'Eğlence',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}