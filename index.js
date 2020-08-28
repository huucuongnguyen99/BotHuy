const Discord = require('discord.js');
const Client = new Discord.Client();

const prefix = '!';
const fs = require('fs');

Client.commands= new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    Client.commands.set(command.name, command);
}

Client.once('ready', () =>{
    console.log('This bot is online!');
});
Client.on('message', message=>{
    // let args = message.content.substring(prefix.length).split(" ");
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command === 'ping'){
        Client.commands.get('ping').execute(message, args);
    }

    if(command === 'huy'){
        Client.commands.get('huy').execute(message, args);
    }

    if(command === 'quân'){
        Client.commands.get('quan').execute(message, args);
    }

    if(command === 'hải'){
        Client.commands.get('hai').execute(message, args);
    }

    if(command === 'cường'){
        Client.commands.get('cuong').execute(message, args);
    }

    if(command === 'config'){
        Client.commands.get('config').execute(message, args);
    }

    if(command === 'clear'){
        Client.commands.get('clear').execute(message, args);
    }

    if(command === 'poll'){
        Client.commands.get('poll').execute(message, args);
    }

});
Client.login(process.env.token);


