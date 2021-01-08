const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://cdn.discordapp.com/attachments/783242190474051624/790319229160914984/Adder_Player_Header_Design-min_1-instapost-min.jpg"];

let result = Math.floor((Math.random() * replies.length));

let logoembed = new Discord.MessageEmbed()

.setTitle("Header")

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
  name: 'header',
  description: 'Darknes Code',
  usage: 'yardım'
};