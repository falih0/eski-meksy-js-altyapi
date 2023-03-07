const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

exports.run = async (client, message, args) => {
let membro = message.mentions.members.first() || client.users.cache.get(args[0]) || message.author;
let avatarURL = membro.displayAvatarURL({size: 2048, dynamic: true})

const row = new ActionRowBuilder()
.addComponents(
  new ButtonBuilder()
  .setLabel('Avatar Link')
  .setEmoji('<:icon_link:1078247960556601415>')
  .setStyle(ButtonStyle.Link)
  .setURL(avatarURL)
)

let embed = new EmbedBuilder()
.setAuthor({ name: message.author.tag, iconURL: message.author.avatarURL()})
.setImage(`${avatarURL}`)
.setColor("#2b2d31")
.setFooter({  text: `Meksy.js`, iconURL: client.user.avatarURL({}) })
message.reply({ embeds: [embed], components: [row]})
 
};
exports.conf = {
  aliases: ["av"]
};
exports.help = {
  name: "avatar"
};