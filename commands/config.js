const { DiscordAPIError } = require("discord.js");
const Discord = require('discord.js');

module.exports = {
    name: 'config',
    description: "get config command",
    execute(message, args){

        if(!args[0]) {

            const embed = new Discord.MessageEmbed()
            .setColor(0xFF0000)
            .setTitle('Command lấy config CSGO')
            .addField('Cách dùng:', ('!config + [file/radar/bob/viewmodel/training/deathmatch]'))

            message.channel.send(embed);
        }

        switch(args[0]){

            case 'radar':
                message.channel.send('cl_teammate_colors_show 1;\ncl_hud_radar_scale 1.15;\ncl_radar_scale 0.4;\ncl_radar_always_centered 0;\ncl_radar_icon_scale_min 1;')
            break;

            case 'file':
                message.channel.send({files:['./configcsgo/HuyTran_Maxim.cfg']});
            break;

            case 'bob':
                message.channel.send('cl_bob_lower_amt 5;\ncl_bobamt_lat 0.1;\ncl_bobamt_vert 0.1;\ncl_bobcycle 0.98;\ncl_viewmodel_shift_left_amt 0.5;\ncl_viewmodel_shift_right_amt 0.25;')
            break;   

            case 'viewmodel':
                message.channel.send('viewmodel_offset_x 2;\nviewmodel_offset_y 2;\nviewmodel_offset_z -2;\nviewmodel_fov 68;\nviewmodel_recoil 0;\n')
            break;

            case 'training':
                message.channel.send('sv_cheats 1;\nmp_limitteams 0;\nmp_autoteambalance 0;\nmp_roundtime 60;\nmp_roundtime_defuse 60;\nmp_maxmoney 60000;\nmp_startmoney 60000;\nmp_freezetime 0;\nmp_buytime 9999;\nmp_buy_anywhere 1;\nsv_infinite_ammo 1;\nammo_grenade_limit_total 5;\nbot_kick;\nmp_warmup_end;\nsv_grenade_trajectory 1;\nsv_grenade_trajectory_time 10;\nsv_showimpacts 1;\nsv_showimpacts_time 10;\nmp_restartgame 1;');
            break;

            case 'deathmatch':
                message.channel.send('mp_teammates_are_enemies 1;\nmp_autoteambalance 0;\nbot_kick;')
            break;

        }
    }
}