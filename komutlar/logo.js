const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://cdn.discordapp.com/attachments/783242023146749972/792002545554948116/unknown.png","https://cdn.discordapp.com/attachments/783242023146749972/792002392828674048/unknown.png"];

let result = Math.floor((Math.random() * replies.length));

let logoembed = new Discord.MessageEmbed()

.setTitle("Logo")

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
  name: 'logo',
  description: 'Darknes Code',
  usage: 'yardım'
};