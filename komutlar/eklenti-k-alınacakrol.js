const discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      ` Bu komutu kullanabilmek için "\`yönetici\`" yetkisine sahip olmalısın`
    );

  if (args[0] === "sıfırla") {
    const kayıtsistemi = new discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)
      .setTitle(`${client.user.username} - Alınacak Rolü Sıfırla `)
      .setColor("RED")
      .setDescription(`Kayıt Olunca Otomatik Alınacak Rol Sıfırlandı ! `)
      .setThumbnail(client.user.avatarURL)
      .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `);
    message.channel.send(kayıtsistemi);
    db.delete(`alınacakrol_${message.guild.id}`);
    return;
  }

  let rol = message.mentions.roles.first();
  if (!rol) {
    const kayıtsistemi = new discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)
      .setTitle(`${client.user.username} - Alınacak Roal Ayarla `)
      .setColor("RED")
      .setDescription(`Kayıt Olunca Alınacak Rolü Belirtiniz ! `)
      .setThumbnail(client.user.avatarURL)
      .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `);
    message.channel.send(kayıtsistemi);
  }
  db.set(`alınacakrol_${message.guild.id}`, rol.id);
  const kayıtsistemi = new discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL)
    .setTitle(`${client.user.username} - Alınacak Rol Ayarlandı `)
    .setColor("RED")
    .setDescription(
      `Kayıt Olunca Otomatik Alınacak Rol Başarıyla ${rol} Olarak Ayarlandı ! `
    )
    .setThumbnail(client.user.avatarURL)
    .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `);
  message.channel.send(kayıtsistemi);
};
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ["kayıt-alınacakrol"],
  permlevel: 0
};
exports.help = {
  name: "alınacak-rol",
  description: "Kayıt Olunca Alınacak Rolü Ayarlar",
  usage: "-kayıt-alınacak-rol @rol"
};
