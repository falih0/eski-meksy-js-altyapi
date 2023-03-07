const { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle} = require("discord.js");
const config = require("../config.js");

let link_button = new ActionRowBuilder().addComponents(
  new ButtonBuilder()
  .setLabel('Davet Et')
  .setStyle(ButtonStyle.Link)
  .setURL(`https://discord.com/api/oauth2/authorize?client_id=1078162808094593135&permissions=0&scope=bot%20applications.commands`))

exports.run = async (client, message, args) => {

    const embed = new EmbedBuilder()
    .setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.global/ba3dcd96-f0d3-4f90-a902-f864d003e214/Meksy%20Logo.png?v=1677298284733')
    .setAuthor({name: `Meksy.js Komutlar`, iconURL: client.user.avatarURL(),})
    .setDescription(`Hey selam. ben **Meksy.js** Sunucuna yardım için burdayım!
**Prefixlerim;** \`${config.prefix}\`
**Destek sunucum;** [Buraya Tıkla](https://discord.gg/w8e4acQYWh)
`)
.addFields({ name: `<:4bot:1078184732992491562> \`${config.prefix}sistemler\``, value: `> Sistemleri öğren ve kullan.`, inline: true })
.addFields({ name: `<:3image:1078184730761109504> \`${config.prefix}yetkili\``, value: `> Yetkililerin max yapabiliceği komutlar.`, inline: true })
.addFields({ name: `<:6earth:1078184735253200936> \`${config.prefix}eğlence\``, value: `> Eğlenmene komutlarıyla eğlenmene bak.`, inline: true })

.addFields({ name: `<a:Snowsgiving22_AnimatedEmojis:1078184751728435220> \`${config.prefix}kayıt\``, value: `> Kayıt menüsüdür. menülerdeki ayarları yaparak sunucuna kayıt sistemi getir!`})
.addFields({ name: `<:1giftixlove:1078184728865280000> \`${config.prefix}tagges\``, value: `> Tag menüsüdür. menülerdeki ayarları yaparak sunucuna tag sistemi getir!`})
.addFields({ name: `<a:Snowsgiving22_AnimatedEmojis:1078184726248038400> \`${config.prefix}şablon\``, value: `> Oluşturduğum şablonları al oluştur.`})

.addFields({ name: `- Daha fazla bilgi için;`, value: `<@1077030644586131527> Ulaşabilirsin.`, inline: true })
.addFields({ name: `- Bot Sitesi;`, value: `Gitmek için: [Buraya Tıkla](https://meksyjs.glitch.me/?)`, inline: true })
.setColor("#2b2d31")
.setFooter({  text: `Meksy.js`, iconURL: client.user.avatarURL({}) })

    .setTimestamp()
    return message.reply({ embeds: [embed], components: [link_button]})

};
exports.conf = {
  aliases: ["help"]
};

exports.help = {
  name: "yardım"};

