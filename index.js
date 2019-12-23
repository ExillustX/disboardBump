require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('disboardBump bot started...');
  client.user.setActivity(process.env.SET_ACTIVITY);
  function bump() {
    client.channels.get(process.env.CHANNEL).send('!disboard bump').then(() => {
      console.log('Bumped!')
    }).catch((e) => {
      console.error(e);
    });
  };
  setInterval(function() {
    bump();
  }, process.env.INTERVAL);
});


client.login(process.env.TOKEN).then(() => {
  console.log('Discord login succeed!')
})
 .catch((e) => {
  console.error(e);
 });
