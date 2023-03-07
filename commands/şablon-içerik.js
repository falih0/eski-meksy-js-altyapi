const { EmbedBuilder } = require("discord.js");
const config = require("../config.js");

exports.run = async (client, message, args) => {

    const embed = new EmbedBuilder()
    .setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.global/ba3dcd96-f0d3-4f90-a902-f864d003e214/Meksy%20Logo.png?v=1677298284733')
    .setTitle(`<a:Snowsgiving22_AnimatedEmojis:1078184720258568222> Meksy.js | Şablon İçerik`)
    .setDescription(`**<:n_icon_1:1078248071512739941> \`${config.prefix}gif-şablon\`
> Bu şablon ile kendine bir GIF Sunucusu açabilirsin.

<:n_icon_2:1078248073203028039> \`${config.prefix}youtube-şablon\`
> Bu şablon ile kendine bir Youtube Sunucusu açabilirsin.

<:n_icon_3:1078248074394206218> \`${config.prefix}tasarım-şablon\`
> Bu şablon ile kendine bir Tasarım Sunucusu açabilirsin.

<:n_icon_4:1078248075295989781> \`${config.prefix}public-şablon\`
> Bu şablon ile kendine bir Public Sunucusu açabilirsin.

<:n_icon_5:1078248076768182322> \`${config.prefix}j4j-şablon\`
> Bu şablon ile kendine bir J4J Sunucusu açabilirsin.
\`\`\`         \`\`\`**`)
    .setColor("#2b2d31")
.setFooter({  text: `Meksy.js`, iconURL: client.user.avatarURL({}) })
    .setTimestamp()
    return message.channel.send({embeds : [embed]});

};
exports.conf = {
  aliases: ["şabloniçerik", "şablon içerik", "şablon-sistem", "şablonsistem"]
};

exports.help = {
  name: "şablon"};