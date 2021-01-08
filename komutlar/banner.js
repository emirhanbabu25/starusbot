const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://cdn.discordapp.com/attachments/790319457292517397/791034042127876126/unknown.png"];

let result = Math.floor((Math.random() * replies.length));

let logoembed = new Discord.MessageEmbed()

.setTitle("Banner")

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
  name: 'banner',
  description: 'Darknes Code',
  usage: 'yardım'
};