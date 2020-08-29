const { DiscordAPIError } = require("discord.js");
const Discord = require('discord.js');



module.exports = {
    name: 'poll',
    description: "yes/no",
    execute(message, args){
        const embed = new Discord.MessageEmbed()
        .setColor(0xFFc300)
        .setTitle("Yes/No")
        .setDescription('Cách dùng: !poll + câu hỏi');

        if(!args[0]){
            message.channel.send(embed);
        }else{

            let msgArgs = args.slice(0).join(" ");

            message.delete({timeout: 2000});

            message.channel.send("**" + msgArgs + "**").then(message => {
                message.react('👍');
                message.react('👎');
            }).catch(console.error);
        }
    }
}