const Telegraf = require('telegraf');
const { telegramBotToken } = require('./dotEnv');

let bot = null;

const getBot = () => {
  if (bot == null) {
    bot = new Telegraf(telegramBotToken, {
      polling: true,
    });
  }

  return bot;
};

exports.getBot = getBot;
