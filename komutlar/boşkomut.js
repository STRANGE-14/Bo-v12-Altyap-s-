const discord = require('discord.js') 

exports.run = async(client, message,args) => { 


const embed = new discord.messageEmbed()
.setTitle('BAŞLIK YAZINIZ')
.setDescription('AÇIKLAMA YAZINIZ')
.addField('İÇERİNİZİ YAZINIZ')
.setColor('RANDOM')
message.channel.send(embed) 

};
exports.conf = {
enabled: true, 
guildOnly: false, 
permLevel: 0,  
aliases: ["örnek", "örnek"]
};
exports.help = {
name: "komutun ismini yazın"
};


//////////////STRANGE V12 ALTYAPI