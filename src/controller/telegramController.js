const { send } = require('../telegram/sendMessage');
const logger = require('../logger');

const sendSingle = async ({ chatId, message, template }) => {
  logger.info(`Sending message to ${chatId}`);
  send({ chatId, message, template });
};

const sendMultiple = async ({ codes, message, template }) => {
  logger.info(`Sending multiple messages to ${codes} `);
  codes.forEach((item) => {
    send({ chatId: item, message, template });
  });
};

exports.sendSingle = sendSingle;
exports.sendMultiple = sendMultiple;
