const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("#fff000")
.setTitle("Çekiliş Menüsü")
 
.addField("**s!çekiliş** `<Süre> <Kazanan Sayısı> <Ödül>` ", `Çekiliş Yaparsınız.`)
.addField("**s!yeni-kişi-seç**",                             `Çekilişde Yeni Kişi Seçersiniz.`)
.addField("**s!çekiliş-durdur**",                            `Çekilişi Durdurursunuz.`)
.addField("**s!çekilişi-bitir**",                            `Çekilişi Bitirirsiniz.`)

.addField("<a:krmzelmas:764099211536760845> Linkler", ` \n[Davet Et](https://discord.com/oauth2/authorize?client_id=744990839339483276&scope=bot&permissions=8)` + "**  **" + `\n[Destek Sunucusu](https://discord.gg/c6DgZfvQZ6) `, false)
.setFooter(`Menüyü ${message.author.username} istedi .`, message.author.avatarURL)
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: true, 
   aliases: ["çekiliş-sistem","çekiliş-sistemi",],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'çekiliş',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}