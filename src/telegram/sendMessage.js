const { getBot } = require('./getBot');
const { makeMessageByTemplate } = require('../utils/templateUtils');
const logger = require('../logger');

const bot = getBot();

const send = async ({ chatId, message, template }) => {
  try {
    let body = message;

    if (template != null) {
      body = await makeMessageByTemplate(template);
    }

    await bot.telegram.sendMessage(chatId, body, { parse_mode: 'HTML' });
    logger.info('Telegram message successfully send');
  } catch (error) {
    logger.error(`Error tring to send telegram message. ${error}`);
  }
};

exports.send = send;
