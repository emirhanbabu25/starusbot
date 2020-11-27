const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client ,message, args) =>{
if(args[0] === 'aç') {
    const küfür = new Discord.MessageEmbed()
    .setColor("RANDOM")
    db.set(`kufur_${message.guild.id}`, "acik")
    message.channel.send('Küfür kısıtlaması başarıyla açıldı.')
  return
    return message.channel.send(küfür);
}
  const küfür = new Discord.MessageEmbed()
    .setColor("RANDOM")
if (args[0] === 'kapat') {
  db.delete(`kufur_${message.guild.id}`)
message.channel.send('Küfür kısıtlaması başarıyla kapatıldı.')
return
  return message.channel.send(küfür);
}
  message.channel.send('**Lüten `aç` yada `kapat` Yazın!**')
    
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['küfür'],
 permLevel: 3
};

exports.help = {
 name: 'küfür-ayarla',
 description: 'Davet Log Kanalını Belirler',
 usage: 'davet-kanal-ayarla #kanal'
};