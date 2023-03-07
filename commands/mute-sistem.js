const { EmbedBuilder } = require("discord.js");
const config = require("../config.js");

exports.run = async (client, message, args) => {

    const embed = new EmbedBuilder()
    .setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.global/ba3dcd96-f0d3-4f90-a902-f864d003e214/Meksy%20Logo.png?v=1677298284733')
    .setTitle(`<:meksyemoji37:1079275535781343333> Meksy.js | Mute Sistem`)
    .setDescription(`\`\`\`     \`\`\`
    <:meksyemoji3:1079275610154737724> \`${config.prefix}mute <@kişi> <@muterole>\`
    > **Kullanıcıyı Mutelersiniz.**

    <:meksyemoji6:1079790447725125694> \`${config.prefix}vmute <@kişi> <@vmuterole>\`
    > **Kullanıcıyı Seste Mutelersiniz.**

    __**Eğer muteleri kaldırmak isterseniz ↓**__

    > <:meksyemoji8:1079790452875735060> **${config.prefix}unmute <@kişi> <@muterole>**
    
    > <:meksyemoji7:1079790449939714159> **${config.prefix}unvmute <@kişi> <@vmuterole>**
    `)  
   .setImage(`https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTJkNzc1NWNiMDZlMDhiMmNiMmMxNzRmNTU1ODJkYTM4NmI2MzQwZSZjdD1n/iUa8wHwa9VWz4uYKYY/giphy.gif`)
    .setColor("#2b2d31")
.setFooter({  text: `Meksy.js`, iconURL: client.user.avatarURL({}) })
    .setTimestamp()
    return message.channel.send({embeds : [embed]});

};
exports.conf = {
  aliases: ["mutesistem"]
};

exports.help = {
  name: "mute-sistem"};