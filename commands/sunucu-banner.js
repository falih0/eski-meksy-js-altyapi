const { EmbedBuilder } = require("discord.js");
const config = require("../config.js");

exports.run = async (client, message, args) => {

    var serverBanner = message.guild.bannerURL();

message.reply(`${serverBanner}`)

};
exports.conf = {
  aliases: ["sunucubanner"]
};

exports.help = {
  name: "sunucu-banner"};