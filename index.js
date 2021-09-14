const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
// const config = require('./config.json');

client.on('ready', () => {
    console.log('The client is ready!');
});

<<<<<<< HEAD
client.login(process.env.DJS_TOKEN)
=======
client.login(process.env.DJS_TOKEN)
>>>>>>> f309ddd750b6059728d693b922a4641c0221ee2f
