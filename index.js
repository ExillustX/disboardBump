require('dotenv').config();
require('http').createServer().listen(3000);
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('disboardBump bot started...');
  client.user.setActivity(process.env.SET_ACTIVITY);
  function bump() {
    console.log('Bumped!')
    client.channels.get(process.env.CHANNEL).send('!disboard bump');
  };
  bump()
  setInterval(function() {
    bump();
  }, process.env.INTERVAL);
});


client.login(process.env.TOKEN);
