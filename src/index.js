const Telegraf = require('telegraf');
const answers = require('./answers');
const middleware = require('./middlewares');

require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);
middleware(bot);

bot.start((ctx) => ctx.reply(answers.welcome));
bot.help((ctx) => ctx.reply(answers.help));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply(answers.hi));

bot.command('author', (ctx) => ctx.reply(answers.author));
// bot.command('modern', ({ reply }) => reply('Yo'));
// bot.command('hipster', Telegraf.reply('λ'));

bot.command('quit', (ctx) => {
  // Explicit usage
  ctx.telegram.leaveChat(ctx.message.chat.id)

  // Using context shortcut
  ctx.leaveChat();
});

bot.on('text', (ctx) => {
  // Explicit usage
  ctx.telegram.sendMessage(ctx.message.chat.id, `Hello ${ctx.state.role}`);

  // Using context shortcut
  ctx.reply(`Hello ${ctx.state.role}`);
});

bot.on('callback_query', (ctx) => {
  // Explicit usage
  ctx.telegram.answerCbQuery(ctx.callbackQuery.id);

  // Using context shortcut
  ctx.answerCbQuery();
});

bot.catch((err, ctx) => {
  console.log(`Ooops, encountered an error for ${ctx.updateType}`, err);
});

bot.launch();
