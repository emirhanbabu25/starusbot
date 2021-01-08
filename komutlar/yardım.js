const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args, msg) => {

const embed = new Discord.MessageEmbed()
    
.setTitle("HC Yardım Menüsü",)
.setColor('#fff000') 
.addField(" h!logo",         `:white_small_square: **Normal Logo.**`,)
.addField(" h!esport",       `:white_small_square: **Esport Logo.**`,)
.addField(" h!header",       `:white_small_square: **Header Logo.**`,)
.addField(" h!tournamnet",   `:white_small_square: **Tournament Logo.**`,)
.addField(" h!thumbnail",    `:white_small_square: **Thumbnail Logo.**`,)
.addField(" h!stream",       `:white_small_square: **Stream Logo.**`,)
.addField(" h!banner",       `:white_small_square: **Banner Logo.**`,)              


  
message.channel.send({embed});
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['help'],
permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Darknes Code',
  usage: 'yardım'
};