const { EmbedBuilder,  } = require("discord.js");
const config = require("../config.js");

exports.run = async (client, message, args) => {

    const embed = new EmbedBuilder()
    .setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.global/ba3dcd96-f0d3-4f90-a902-f864d003e214/Meksy%20Logo.png?v=1677298284733')
    .setTitle(`<a:Snowsgiving22_AnimatedEmojis:1078184726248038400> Meksy.js | Sistemler`)
    .setDescription(`**> \`${config.prefix}mute-sistem\`
    • Kullanıcıyı Muteleyip Mutesini Kaldırırsınız.
    **`)
    .setColor("#2b2d31")
.setFooter({  text: `Meksy.js`, iconURL: client.user.avatarURL({}) })
    .setTimestamp()
    return message.channel.send({embeds : [embed]});

};
exports.conf = {
  aliases: ["sistem", "system"]
};

exports.help = {
  name: "sistemler"};