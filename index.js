const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
// const config = require('./config.json');
const command = require('./command')

client.on('ready', () => {
    console.log('The client is ready!');

    command(client, 'ping', message => {
        message.channel.send('Pong!')
    })
});

client.login(process.env.DJS_TOKEN)