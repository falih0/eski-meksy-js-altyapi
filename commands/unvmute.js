const { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle} = require("discord.js");
const db = require("croxydb");
const config = require("../config.js");

exports.run = async (client, message, args) => {

    if (!message.member.permissions.has("0x0000000000000004"))
    return message.reply({ content: `**Bir Hata Oldu!**\n<:8timeout:1078184740999405588> Bu Komutu Kullana Bilmek için \`Yönetici\` Yetkisine Sahip Olmalısın!\n\nhttps://media2.giphy.com/media/4IEBXgHmyg8i9oMKrc/giphy.gif` }).catch((err) => {});

    let user = message.mentions.members.first()
    if (!user) return message.reply(`**Bir Hata Oldu!**\n\n> VMuteliceğim kişiyi etiketler misin?\n\nhttps://media4.giphy.com/media/L3DxbZNlom4uPBK8Hc/giphy.gif`)

    let rol = message.mentions.roles.first();
    if(!rol) return message.reply(`**Bir Hata Oldu!**\n\n> VMutesini verebilmem için \`?vmute <@user> <@rol>\` Yapınız.\n\nhttps://media4.giphy.com/media/L3DxbZNlom4uPBK8Hc/giphy.gif`)
    message.guild.members.cache.get(user.id).roles.add(rol)
    message.reply(`**Başarıyla Tamamlandı!**\n\n> Başaryıla ${user} VMuteden çıkarıldı.\n\nhttps://media4.giphy.com/media/jeNji1ea5d9Oi72141/giphy.gif`)

};
exports.conf = {
aliases: []
};
exports.help = {
name: "unvmute"
};