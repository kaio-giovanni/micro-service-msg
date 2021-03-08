require('./telegram');
const queueConsumer = require('./messageBroker/consumer');
const { queueTelegramSendMessage } = require('./messageBroker/queueEndpoints');
const telegramController = require('./controller/telegramController');

queueConsumer.createConsumer(queueTelegramSendMessage, telegramController.sendSingle);
