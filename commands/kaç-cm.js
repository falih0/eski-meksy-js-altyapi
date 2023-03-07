const { EmbedBuilder,  } = require("discord.js");
const config = require("../config.js");

exports.run = async (client, message, args) => {

    const random = Math.floor(Math.random() * 99) + 1

    const embed = new EmbedBuilder()
    .setDescription(`<@${message.author.id}> **Malafatın __${random}CM__** 🍆`)  
   .setImage(`https://cdn.glitch.me/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2Feggplant-transparent-animated-gif-3.gif`)
    .setColor("#2b2d31")
.setFooter({  text: `Meksy.js`, iconURL: client.user.avatarURL({}) })
    .setTimestamp()
    return message.channel.send({embeds : [embed]});

};
exports.conf = {
  aliases: ["kaçcm"]
};

exports.help = {
  name: "kaç-cm"};