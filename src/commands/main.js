const { getBot } = require('../getBot');
const { send } = require('../controller/telegramController');
const logger = require('../logger');

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
