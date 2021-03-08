const { getBot } = require('../getBot');
const { registerUser } = require('../../service/users');

const bot = getBot();

bot.command('/hello', async (ctx) => {
  await ctx.reply(`Hello ${ctx.message.from.first_name} ^_^`);
});

bot.command('/help', async (ctx) => {
  const commands = await bot.telegram.getMyCommands();
  const arrayCommands = commands.map(
    ({ command, description }) => `/${command} - ${description}\n`,
  );
  await ctx.reply(arrayCommands.join('\n'));
});

bot.command('/register', (ctx) => {
  const chatId = ctx.chat.id;
  const userName = ctx.message.from.first_name;
  const result = registerUser({ userName, chatId });
  if (result) {
    ctx.reply('User successfully registered');
  } else {
    ctx.reply('An error occurred');
  }
});
