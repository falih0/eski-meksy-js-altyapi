const { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle} = require("discord.js");
const config = require("../config.js");

  let link_button = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
    .setLabel(`🔹 Normal Davet`)
    .setStyle(ButtonStyle.Link)
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=1078162808094593135&permissions=0&scope=bot%20applications.commands`))

exports.run = async (client, message, args) => {

    const embed = new EmbedBuilder()
    .setColor("#2b2d31") 
    .setThumbnail('https://cdn.glitch.global/ba3dcd96-f0d3-4f90-a902-f864d003e214/Snowsgiving22_AnimatedEmojis_SnowAngel.gif?v=1677298521638')
    .setAuthor({name: `Meksy.js | Davet Menü`, iconURL: client.user.avatarURL(),})
    .addFields({ name: `> Yöneticili Davet`, value: `• [Buraya Tıkla](${config.yöneticilidavet})\n\`\`\`js\n${config.yöneticilidavet}\`\`\``})
    .addFields({ name: `> Rolsüz Davet`, value: `• [Buraya Tıkla](${config.rolsüzdavet})\n\`\`\`js\n${config.rolsüzdavet}\`\`\``})
    .addFields({ name: `> Yetkili Davet`, value: `• [Buraya Tıkla](${config.yetkilidavet})\n\`\`\`js\n${config.yetkilidavet}\`\`\``})
    .addFields({ name: `> Meksy.js Destek`, value: `• [Buraya Tıkla](${config.destek})\n\`\`\`js\n${config.destek}\`\`\``})
    .addFields({ name: `> Meksy.js WebSite`, value: `• [Buraya Tıkla](${config.website})\n\`\`\`js\n${config.website}\`\`\``})
    .setFooter({  text: `Meksy.js`, iconURL: client.user.avatarURL({}) })
    .setTimestamp()
    return message.channel.send({embeds : [embed], components: [link_button]});

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "davet"};
