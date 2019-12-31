const Discord = require('discord.js')
var client = new Discord.Client();
const moment = require("moment");

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
	if (msg.content === '!ping') {
		msg.reply('Pong!')
	} else if (msg.content.startsWith("!settime")) {
		saveTime(msg);
	} else if (msg.content === "!time") {
		getTime(msg);
	}
});

function saveTime(msg) {
	const arg = msg.content.split(" ");
	if (arg.length === 1) {
		msg.reply("Please enter time. ");
	}
	this.time = moment.duration(arg[1]);
	getTime(msg);
}

function getTime(msg) {
	msg.reply(`Moment time: ${this.time.toString()}`)
}

client.login(process.env.BOT_TOKEN)