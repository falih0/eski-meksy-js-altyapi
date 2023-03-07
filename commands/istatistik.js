const { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle} = require("discord.js");
const config = require("../config.js");

exports.run = async (client, message, args) => {
  const moment = require("moment");
require("moment-duration-format");

const Uptime = moment
.duration(client.uptime)
.format(" D [gün], H [saat], m [dakika], s [saniye]");

    const embed = new EmbedBuilder()
    .setThumbnail('https://media2.giphy.com/media/H22Zff24leudRIUiiJ/giphy.gif')
    .setAuthor({name: `Meksy.js | İstatistik`, iconURL: client.user.avatarURL(),})
.addFields({ name: `• Sunucu Sayısı`, value: `\`\`\`${client.guilds.cache.size}\`\`\``, inline: true })
.addFields({ name: `• Komut Sayısı`, value: `\`\`\`${client.commands.size}\`\`\``, inline: true })
.addFields({ name: `• Kullanıcı Sayısı`, value: `\`\`\`${client.users.cache.size}\`\`\``, inline: true })

.addFields({ name: `• Gecikme Süresi`, value: `\`\`\`${client.ws.ping}\`\`\``, inline: true })
.addFields({ name: `• RAM Kullanımı`, value: `\`\`\`${Math.round(process.memoryUsage().heapUsed / 1024 / 1024).toLocaleString()}%\`\`\``, inline: true })
.addFields({ name: `• Node.JS Sürüm`, value: `\`\`\`${process.version}\`\`\``, inline: true })

.addFields({ name: `• Aktif Süre`, value: `\`\`\`${Uptime}\`\`\``})

.setColor("#2b2d31")
.setFooter({  text: `Meksy.js`, iconURL: client.user.avatarURL({}) })

    .setTimestamp()
    return message.reply({ embeds: [embed]})

};
exports.conf = {
  aliases: ["i", "stats", "stat", "up"]
};

exports.help = {
  name: "istatistik"};
