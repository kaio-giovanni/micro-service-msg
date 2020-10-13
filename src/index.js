const Telegraf = require('telegraf');
const answers = require('./answers');

require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply(answers.welcome));
bot.help((ctx) => ctx.reply(answers.help));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply(answers.hi));

bot.command('author', (ctx) => ctx.reply(answers.author));
// bot.command('modern', ({ reply }) => reply('Yo'));
// bot.command('hipster', Telegraf.reply('λ'));

bot.launch();
