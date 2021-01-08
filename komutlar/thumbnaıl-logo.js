const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://cdn.discordapp.com/attachments/785872345721864192/785897615266152458/hc_design-thumb.png"];

let result = Math.floor((Math.random() * replies.length));

let logoembed = new Discord.MessageEmbed()

.setTitle("Thumbnail")

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
  name: 'thumbnail',
  description: 'Darknes Code',
  usage: 'yardım'
};