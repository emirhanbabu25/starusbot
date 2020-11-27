const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("#fff000")
.setTitle("Starus Logo Komutları ")
 .setTimestamp()
.setDescription("<a:hypee:764427448569036812> **s!dinamik** = Dinamik logo oluşturur.  \n <a:hypee:764427448569036812> **s!altın** = Altın logo oluşturur.  \n <a:hypee:764427448569036812> **s!banner** = Banner logo oluşturur.  \n <a:hypee:764427448569036812> **s!basit** = Basit logo oluşturur.  \n <a:hypee:764427448569036812> **s!elmas** = Elmas logo oluşturur.  \n <a:hypee:764427448569036812> **s!sarı** = Sarı logo oluşturur.  \n <a:hypee:764427448569036812> **s!neonmavi** = Neon mavi logo oluşturur.  \n <a:hypee:764427448569036812> **s!kalın** = Kalın logo oluşturur.  \n <a:hypee:764427448569036812> **s!anime** = Anime yazı tipinde logo oluşturur.  \n <a:hypee:764427448569036812> **s!habbo** = Habbo yazı tipinde logo oluşturur.  \n <a:hypee:764427448569036812> **s!arrow** = Ok işaretli logo oluşturur. \n <a:hypee:764427448569036812> **s!green** = Yeşil logo oluşturur.  \n <a:hypee:764427448569036812> **s!alev** = Alevli logo oluşturur. \n <a:hypee:764427448569036812> **s!kırmızı** = Kırmızı logo oluşturur. \n **Oyun Logoları** \n <a:hypee:764427448569036812> **s!skull** = Skull logo oluşturur.  \n **Extra Logolar** \n <a:hypee:764427448569036812> **s!cool** = Cool logo oluşturur. \n <a:hypee:764427448569036812> **s!comic** = Comic logo oluşturur. \n <a:hypee:764427448569036812> **s!discord** = Discord logo oluşturur. \n **Sıradan Logolar** \n <a:hypee:764427448569036812> **s!logo1**\n <a:hypee:764427448569036812> **s!logo2** \n <a:hypee:764427448569036812> **s!logo3** \n <a:hypee:764427448569036812> **s!logo4** \n <a:hypee:764427448569036812> **s!logo5** \n <a:hypee:764427448569036812> **s!logo6** \n <a:hypee:764427448569036812> **s!logo7** \n <a:hypee:764427448569036812> **s!logo8** \n <a:hypee:764427448569036812> **s!logo9** \n <a:hypee:764427448569036812> **s!logo10**   ")
.setImage("")
.setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL())
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["Logo"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'logo',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!logo'
}