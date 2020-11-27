const db = require('quick.db');

exports.run = (client, message, args, func) => {
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`You must have "\` Administrator \`" to use this command.`);
  
  let prefix = db.fetch(`prefix_${message.guild.id}`)
  
   
  
    if(args[0] === "sıfırla") {
    if(!prefix) {
      message.channel.send(`Prefix Başarıyla Sıfırlandı.`)
      return
    }

    db.delete(`prefix_${message.guild.id}`)
    message.channel.send(`Prefix Başarıyla Ayarlandı | Prefix :  \`\``)
    return
      
    }
  
   
  if (!args[0])
    return message.channel.send(`Lütfen bir prefix belirtiniz!.`)
  db.set(`prefix_${message.guild.id}`, args[0])
      message.channel.send(`Prefix Başarıyla Ayarlandı | Yeni Prefix :  \`${args[0]}\``)
  
    
  
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['prefix'],
    permLevel: 0
};
  
  exports.help = {
    name: 'set-prefix',
    description: 'Bota eklenmesini istediğiniz şeyi tavsiye etmenizi sağlar',
    usage: 'prefix <prefix>'
};

