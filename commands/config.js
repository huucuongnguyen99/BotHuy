module.exports = {
    name: 'config',
    description: "get config command",
    execute(message, args){
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
        }
    }
}