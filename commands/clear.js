module.exports = {
    name: 'clear',
    description: "clear message command",
    execute(message, args){
        if(!args[0]) return message.reply('thêm số nữa bro!')
        if(args[0] !=null){
            message.channel.bulkDelete(parseInt(args[0])+1);
            setTimeout(() => {
                message.channel.send(args[0] + ' tin nhắn đã được xóa');
            }, 1500);
            
        }
    }
}