require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('disboardBump bot started...');
  bump();
  setInterval(function() {
    bump();
  }, process.env.INTERVAL);
});

function bump() {
    client.channels.get(process.env.CHANNEL).send('!disboard bump');
};

client.login(process.env.TOKEN);
