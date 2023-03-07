const { EmbedBuilder,  } = require("discord.js");
const config = require("../config.js");

exports.run = async (client, message, args) => {

    const embed = new EmbedBuilder()
    .setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.global/ba3dcd96-f0d3-4f90-a902-f864d003e214/Meksy%20Logo.png?v=1677298284733')
    .setTitle(`<a:Snowsgiving22_AnimatedEmojis:1078184726248038400> Meksy.js | Faliho Bilgi`)
    .setDescription(`
**<:coloricon_red:1078248245093990400> Faliho Youtube; [Buraya Tıkla](https://www.youtube.com/@faliho/featured)

<:coloricon_dblue:1078248242426413116> Faliho Discord; [Buraya Tıkla](https://discord.gg/varlica)

<:coloricon_green:1078248243772788766> Faliho Spotify; [Buraya Tıkla](https://open.spotify.com/user/31kks3qdlxtftmbxxetnqi2pbr3a)

\`\`\`fix
• Faliho Meksy.js'nın kodlamacısı ve kurucusudur.\`\`\`
**
`)  
   .setImage(`https://media.discordapp.net/attachments/1077190519328882688/1077190571174662175/sdgsdsgdgsdgdssdgsdgsdg.PNG`)
    .setColor("#2b2d31")
.setFooter({  text: `Meksy.js`, iconURL: client.user.avatarURL({}) })
    .setTimestamp()
    return message.channel.send({embeds : [embed]});

};
exports.conf = {
  aliases: ["falihobilgi", "faliho bilgi"]
};

exports.help = {
  name: "faliho-bilgi"};