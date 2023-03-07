const { EmbedBuilder,  } = require("discord.js");
const config = require("../config.js");

exports.run = async (client, message, args) => {

var gifler = [
    '100 Dolar Kaybettin', 
    'Soyduktan sonra yakalandın ve hapise atıldın', 
    '10M Dolar Çaldın', 
    '150Milyar dolar çaldın', 
    'Hiçbirşey alamadın', 
    'bankacı kadın bu işi anladı kimseye söylemesin diye 100 dolar verdin kaçtın', 
    'banka patronu mafya çıktı ve kaçtın.', 
    'bankayı hackledin ve direkt bankayı kendi üzerine aldın', 
    'bankayı hackleyemedin ve hapise atılıp 1milyon dolar ödedin.', 
    'soygun yaparken polisler tarafından alt edildin', 
    'eve soygun yaptın ve 10Bin dolar aldın', 
    'dünyanın en büyük şirketini soyarak türkiyede doları 18.63TL den 0.50TL yaptın', 
    'dilencilerden 10Bin dolar haraç kestin', 
    'dilencileri soyayım derken dayak yedin ve 15Bin dolar kaybettin', 
    'evi soyayım derken polise yakalandın ve herşeyin elden gitti', 
    'bütün ülkeyi soyarak lüks bir vilalda yaşamaya başladın', 
    'tüm ülkeyi soyarak lüks yerde hackerlik yaparken polisler tarafından yakalandın ve herşeyin gitti', 
    'soygun başarısız!', 
    'Elon Musk u soyarak dünyanın en zengin adamı oldun.'
];
let resimler = gifler[Math.floor(Math.random() * gifler.length)];

    const embed = new EmbedBuilder()
    .setTitle('bunlar tamamen eğlencesine yapılmıştır.')
    .setDescription(`\`\`\`        \`\`\`
<@${message.author.id}>  **\`${resimler}\`** 

\`\`\`        \`\`\`
    `)  
    .setImage('https://media.tenor.com/-6eAKccgsV4AAAAC/steal-stole.gif')
    .setColor("#2b2d31")
.setFooter({  text: `Meksy.js`, iconURL: client.user.avatarURL({}) })
    .setTimestamp()
    return message.channel.send({embeds : [embed]});

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "soygun"};