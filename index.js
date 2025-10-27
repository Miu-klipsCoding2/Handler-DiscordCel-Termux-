const { Client, GatewayIntentBits: GIB } = require('discord.js');
require('dotenv').config();

const client = new Client ({ intents: [
  GIB.Guilds,
  GIB.GuildMessages,
  GIB.MessageContent
] });

const prefix = '.';

client.on('ready', () => {
  console.log('Bot esta online y listo para usarse!!');
});

client.on('messageCreate', async (message) => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const cmd = args.shift().toLowerCase();

  if(cmd === 'ping'){
    message.channel.send('Pong');
  }
});

client.login(process.env.token);