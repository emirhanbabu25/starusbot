const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = [""];

let result = Math.floor((Math.random() * replies.length));

let logoembed = new Discord.MessageEmbed()

.setTitle("Bu Komut Şuanda Kullanım Dışı")

.setColor('#fff000')

.setFooter(`${message.author.tag} `, message.author.avatarURL)

 .setImage(replies[result]);

message.channel.send(logoembed);
  

};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['help'],
permLevel: 0
};

exports.help = {
  name: 'tournamnet',
  description: 'Darknes Code',
  usage: 'yardım'
};