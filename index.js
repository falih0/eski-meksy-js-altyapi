const { PermissionsBitField, EmbedBuilder, ButtonStyle, Client, GatewayIntentBits, ChannelType, Partials, ActionRowBuilder, SelectMenuBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, InteractionType, SelectMenuInteraction, ButtonBuilder } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const db = require('croxydb');
const config = require("./config.js");
AsciiTable = require("ascii-table"); // npm install ascii-table
ms = require("ms") // npm install ms

const client = new Client({
  partials: [
    Partials.Message, // mesaj için
    Partials.Channel, // metin kanalı için
    Partials.GuildMember, // lonca üyesi için
    Partials.Reaction, // mesaj tepkisi için
    Partials.GuildScheduledEvent, // lonca etkinlikleri için
    Partials.User, // discord kullanıcısı için
    Partials.ThreadMember, // ileti dizisi üyesi için
  ],
  intents: [
    GatewayIntentBits.Guilds, // lonca ile ilgili şeyler için
    GatewayIntentBits.GuildMembers, // lonca üyeleri ile ilgili şeyler için
    GatewayIntentBits.GuildBans, // lonca yasaklarını yönetmek için
    GatewayIntentBits.GuildEmojisAndStickers, // emojileri ve çıkartmaları yönetmek için
    GatewayIntentBits.GuildIntegrations, // discord Entegrasyonları için
    GatewayIntentBits.GuildWebhooks, /// uyumsuzluk web kancaları için
    GatewayIntentBits.GuildInvites, // guild davet yönetimi için
    GatewayIntentBits.GuildVoiceStates,  // sesle ilgili şeyler için
    GatewayIntentBits.GuildPresences, // kullanıcı varlığı için şeyler
    GatewayIntentBits.GuildMessages, // lonca mesajları için şeyler
    GatewayIntentBits.GuildMessageReactions, // mesaj reaksiyonları için şeyler
    GatewayIntentBits.GuildMessageTyping, // mesaj yazma işlemleri için
    GatewayIntentBits.DirectMessages, // dm mesajları için
    GatewayIntentBits.DirectMessageReactions, // dm mesajı tepkisi için
    GatewayIntentBits.DirectMessageTyping, // dm mesajı yazmak için
    GatewayIntentBits.MessageContent, // mesaj içeriğine ihtiyacınız varsa etkinleştirin
  ],
});

module.exports = client;

require("./events/message.js")
require("./events/ready.js")

client.on("ready", () => {
  console.log(`🟢 ${client.user.tag} Bot Aktif!`)
  client.user.setActivity(`🌈 ${config.prefix}yardım | ${client.guilds.cache.size} Sunucu ${client.users.cache.size} Kullanıcı`)
  client.user.setStatus('idle');
});

client.login(config.token || process.env.TOKEN).catch(e => {
console.log("⛔️ İtentler Kapalı Durumda! (bot düştü.)")
})

const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);

    client.on('messageCreate', message => {
    if(message.content.includes(`${config.prefix}kurallar`)) {
    message.channel.send(`<:meksyemoji12:1079790439734984724> **${message.guild.name} Kurallar**\n\n> Kişisel **site, marka, sunucu** vb. reklamlarınızı **DM'den insanlarla paylaşmak** yasaktır.\n> Ekip içerisinde **kendi sunucu marka, site vb. şahsi reklamlardan bahsetmek** yasaktır.\n> Herhangi bir metin-ses kanalında **bir başkasını rahatsız edecek şekilde** abartılı **küfür, hakaret** etmek yasaktır.\n> Sunucu içerisinde **bir üyeyi kışkırtmak, alay etmek, aşağılamak** yasaktır.\n> Spam yapmak,\n> Alt alta yazarak flood atmak,\n> Boş yere sürekli herhangi birini **@etiketlemek, @etiketleyerek spam** atmak , **CAPSLOCK** açarak diğer kullanıcıları rahatsız etmek yasaktır!\n> Ekip içerisinde kavga etmek, kavgaya **dahil olarak tarafları kışkırtmak,**\n> Kişisel **problemleri ekip içerisine yansıtarak huzursuzluk çıkartmak** yasaktır.\n\n**- Daha Fazla Bilgi Almak İçin;**\n\`https://discord.com/terms\` , \`https://discord.com/guidelines\` **bakabilirsiniz.**\n\nhttps://media3.giphy.com/media/rcFPZAhsZGH79Aqi9l/giphy.gif`)
    message.delete()
    }
    })

  client.on('messageCreate', message => {
    if(message.content.includes(`${config.prefix}gif-şablon`)) {
      client.users.send(`${message.author.id}`, `<:icon_join:1078248152584437790> **GIF Şablon Sizler İçin Hazırlandı.** <a:Snowsgiving22_AnimatedEmojis:1078184759307538472>\n\nhttps://discord.new/KAVeVXQ4EgMu`);
      message.channel.send(`sana dmden birşey atıcam bak`);
    }
  })

  client.on('messageCreate', message => {
    if(message.content.includes(`${config.prefix}youtube-şablon`)) {
      client.users.send(`${message.author.id}`, `<:icon_join:1078248152584437790> **Youtube Şablon Sizler İçin Hazırlandı.** <a:Snowsgiving22_AnimatedEmojis:1078184759307538472>\n\nhttps://discord.new/Rah3sZP8JuDH`);
      message.channel.send(`sana dmden birşey atıcam bak`);
    }
  })


  client.on('messageCreate', message => {
    if(message.content.includes(`${config.prefix}tasarım-şablon`)) {
      client.users.send(`${message.author.id}`, `<:icon_join:1078248152584437790> **Tasarım Şablon Sizler İçin Hazırlandı.** <a:Snowsgiving22_AnimatedEmojis:1078184759307538472>\n\nhttps://discord.new/xaqaRzWZmEv2`);
      message.channel.send(`sana dmden birşey atıcam bak`);
    }
  })

  client.on('messageCreate', message => {
    if(message.content.includes(`${config.prefix}j4j-şablon`)) {
      client.users.send(`${message.author.id}`, `<:icon_join:1078248152584437790> **J4J Şablon Sizler İçin Hazırlandı.** <a:Snowsgiving22_AnimatedEmojis:1078184759307538472>\n\nhttps://discord.new/knvUkzACGeWf`);
      message.channel.send(`sana dmden birşey atıcam bak`);
    }
  })

  client.on('messageCreate', message => {
    if(message.content.includes(`${config.prefix}public-şablon`)) {
      client.users.send(`${message.author.id}`, `<:icon_join:1078248152584437790> **Public Şablon Sizler İçin Hazırlandı.** <a:Snowsgiving22_AnimatedEmojis:1078184759307538472>\n\nhttps://discord.new/8hrCtRs2tyH8`);
      message.channel.send(`sana dmden birşey atıcam bak`);
    }
  })