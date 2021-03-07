const { getBot } = require('./getBot');
require('./commands/main');
const logger = require('./logger');
const { catchError } = require('./error/catchError');
const telegramCommands = require('./commands/commandList');

const bot = getBot();

bot.telegram.setMyCommands(telegramCommands).then(() => {
  logger.info('Telegram Bot commands successfully set');
  logger.info('Starting telegram bot');
  bot.launch({ allowedUpdates: true });
});

bot.catch((error, ctx) => {
  catchError({ error });
  ctx.reply('Ocorreu um erro inesperado');
});
