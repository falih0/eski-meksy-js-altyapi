const { EmbedBuilder,  } = require("discord.js");
const config = require("../config.js");

exports.run = async (client, message, args) => {

    const embed = new EmbedBuilder()
    .setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.global/ba3dcd96-f0d3-4f90-a902-f864d003e214/Meksy%20Logo.png?v=1677298284733')
    .setTitle(`<a:Snowsgiving22_AnimatedEmojis:1078184745017540679> Meksy.js | Eğlence Komutları`)
    .setDescription(`**<a:dkdk:1076962095989542962> \`${config.prefix}soygun\`: Soygun yapabilirsiniz ve keyfinize bakın.**
    > __Eğlence Amaçlıdır.__

    **<a:Snowsgiving22_AnimatedEmojis:1078184751728435220> \`${config.prefix}kaçcm\`: Malafatınızı ölçersiniz :D?**

    **<a:cesitliflushed:1078248448345776259> \`${config.prefix}aşk-ölçer\`: Sevgilinizi etiketleyip aşkınızı ölçersiniz.**
`)  
   .setImage(`https://media2.giphy.com/media/0m9mvRdQc8kwmjw9LT/giphy.gif`)
    .setColor("#2b2d31")
.setFooter({  text: `Meksy.js`, iconURL: client.user.avatarURL({}) })
    .setTimestamp()
    return message.channel.send({embeds : [embed]});

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "eğlence"};