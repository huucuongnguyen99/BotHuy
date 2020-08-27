const Discord = require('discord.js');
const bot = new Discord.Client();


const PREFIX = '!';

bot.on('ready', () =>{
    console.log('This bot is online!');
});
bot.on('message', message=>{
    let args = message.content.substring(PREFIX.length).split(" ");

     switch(args[0]){
        case 'hải':
            message.channel.send('đô');
            break;
         case 'huy':
            message.channel.send('siêu đẹp trai');
            break;
         case 'cường':
             message.channel.send('bê đê');
            break;
        case 'quân':
            message.channel.send('đẹp trai');
            break;
        case 'Nhân':
            message.channel.send('nhớ Nhân quá <3');
            break;  

        case 'config':
            if(args[1] === 'file'){
                message.channel.send({
                    files:['HuyTran_Maxim.cfg']
                });
            }
            if(args[1] === 'radar'){
                message.channel.send('cl_teammate_colors_show 1;\ncl_hud_radar_scale 1.15;\ncl_radar_scale 0.4;\ncl_radar_always_centered 0;\ncl_radar_icon_scale_min 1;')
            }
            break;
     }
})
bot.login(process.env.token);


