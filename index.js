const Discord = require('discord.js');
const client = new Discord.Client();
const {token} = require('./config.json');


client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    if (message.content === '!usub') {
        message.channel.send("Take a look at this question.", {files: ["https://media.cheggcdn.com/study/ccf/ccfc995f-35ff-4c42-8ae5-689a78177d86/image.png"]});    }
});

client.login(token);


