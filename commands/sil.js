const Discord = require("discord.js")
const { EmbedBuilder,  } = require("discord.js");
const config = require("../config.js");
const db = require("croxydb")

exports.run = (client, message,args) => {

  if(!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return message.reply(`<:8timeout:1078184740999405588> **'Mesajları Yönet' İzni sende yok.**`)

 let miktar = args[0]
if(!miktar) return message.reply(`<:8timeout:1078184740999405588> **Silinecek miktar giriniz.**`)

 message.channel.bulkDelete(miktar)
 message.channel.send('<:icon_delete:1078247756688269353> Başarıyla \`'+ miktar + '\` Adet Mesaj Silindi. <:icon_delete:1078247756688269353>').then(message => {
    setTimeout(() => message.delete(), 3000);

  });
 
};
exports.conf = {
  enabled: true,
  guildOnly: false,
 aliases: ['sil'],
 permLevel: 0,
};

exports.help = {
  name: 'sil',
  description: 'sil',
  usage: 'sil'
};