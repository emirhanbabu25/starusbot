const Discord = require("discord.js");

exports.run = (client, message) => {

const eğlence = Math.floor(Math.random() * 100) + 1;

return message.channel.send(`**:beers:Efkarın ** \n**:beer: Efkarınız:** **%${eğlence}** **Efkar** `);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "efkarım",
  description: "Efkarınızı ölçer",
  usage: "efkar Ölçer"
};
