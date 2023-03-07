const {EmbedBuilder} = require("discord.js");
const { prefix } = require("../config.js")

exports.run = async (client, message, args) => {

  const user = message.mentions.users.first()
  if(!user) return message.channel.send("Lütfen birini etiketle!")
  
  var gifler = [

    'https://cdn.glitch.global/e34e72d4-94e3-4bd8-b940-770b0ff06c17/heart_walk.gif?v=1677200960417',
    'https://cdn.glitch.global/e34e72d4-94e3-4bd8-b940-770b0ff06c17/kiss.gif?v=1677200966942',
    'https://cdn.glitch.global/e34e72d4-94e3-4bd8-b940-770b0ff06c17/love.gif?v=1677200972933',
    'https://cdn.glitch.global/e34e72d4-94e3-4bd8-b940-770b0ff06c17/te-amo.gif?v=1677200973716'

];
let resimler = gifler[Math.floor(Math.random() * gifler.length)];

  const tahmin = Math.floor(Math.random() * 99) + 1
  var kalp;
  var yorum; 
  
  if(tahmin <= 25) {
    kalp = `❤️🖤🖤🖤🖤🖤`
    yorum = "Yok hocam bu ilişki olmaz."
  }
  
  if(tahmin >= 25) {
    kalp = `❤️❤️🖤🖤🖤🖤`
    yorum = "Ufakta olsa bir hissi var."
  }
  
  if(tahmin >= 50) {
    kalp = `❤️❤️❤️🖤🖤🖤`
    yorum = "Yaani var bir şeyler gibi."
  }
  
  if(tahmin >= 75) {
     kalp = `❤️❤️❤️❤️🖤🖤`
     yorum = "Ufacık daha uğraş olucak."
  }

  if(tahmin >= 85) {
    kalp = `❤️❤️❤️❤️❤️🖤`
    yorum = "Yavaş yavaş tavlıyorsun gibi."
  }
  
  if(tahmin === 100) {
    kalp = `❤️❤️❤️❤️❤️❤️`
    yorum = "Al yüzük tak evlen onla 💍"
  }

  message.reply(`${user} **Bak buraya seçilmiş kişi seni seven biri var!**`)
  
  message.channel.send({ embeds: [
    new EmbedBuilder()
    .setColor("#2b2d31")
    .setDescription(`<a:bit_blue:1078262753128624268> __Aşk Yüzdesi **→**__ %${tahmin}\n**• **\`${kalp}\`\n\n> __Yorum  **→**__ *${yorum}*`)
    .setImage(`${resimler}`)
  ]})
  
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "aşkölçer"
};