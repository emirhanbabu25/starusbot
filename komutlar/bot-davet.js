const codework1 = require('discord.js')

exports.run = function(client, message, args) {
  const codework = new codework1.MessageEmbed() 
                            
.setTitle("Starus Bot | Davet Ekle") 
.addField("Botumuza Oy Vererek Ve Sunucumuza Gelerek Destek  Olabilirsiniz.\n\n",`**Botun Davet Linki :** [Davet Et](https://discord.com/oauth2/authorize?client_id=744990839339483276&scope=bot&permissions=8) | [Destek Sunucusu](https://discord.gg/FGcSt2hUDZ) | [Oy Ver](https://top.gg/bot/744990839339483276)`)

.setThumbnail(`https://cdn.discordapp.com/attachments/781133714021154836/781640347260289024/starus_logo.jpg`)
.setColor("BLACK")

return message.channel.send(codework)
}

exports.conf = {
enabled: false,
guildOnly: false,
aliases: ["botuekle"],
permLevel: 0
  
};
  
exports.help = {
name: 'davet'
};