const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const kayıtyardım = new Discord.MessageEmbed()
    .setTimestamp()
    .setTitle("İnvite Sistemi")
    .setColor("#fff000")
    .setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL())
    .addField(
      "__İnvite Yardım__",
      `

\ \`s!davet-kanal \` : **Davet Kanalı Ayarlar.  __s!davet-kanal #kanal__**

\ \`s!davet-kanal-sıfırla\` : **Davet Kanalını Sıfırlar.**

\ \`s!davetlerim\` : **Davetlerinizi Gösterir.**

\ \`s!davetleri-sıfırla\` : **Davetleri Sıfırlar.**

\ \`s!lider-tablosu\` : **Lider Tablosunu Gösterir.**

\ \`s!rütbeler\` : **Rütbeleri Gösterir 1 Den 10'a Kadar.***

\ \`s!rütbe-ekle\` : **Rütbe Ekler. __s!rütbe-ekle @rol sayı_**

\ \`s!rütbe-sıfırla\` : ** Rütbeyi Sıfırlar.**

\ \`s!davet-ekle\` : **Davet Ekler. __s!davet-ekle @üye sayı__**
`
    );
 
  message.channel.send(kayıtyardım);                                          
};



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım"],
  permLevel: 0
};



exports.help = {
  name: "davet-sistemi",
  description: "Yardım Menüsünü Gösterir.",
  usage: "kayıt-yardım"
};
