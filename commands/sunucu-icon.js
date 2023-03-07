const { EmbedBuilder } = require("discord.js");
const config = require("../config.js");

exports.run = async (client, message, args) => {

    var serverIcon = message.guild.iconURL();

message.reply(`${serverIcon}`)

};
exports.conf = {
  aliases: ["sunucuicon"]
};

exports.help = {
  name: "sunucu-icon"};