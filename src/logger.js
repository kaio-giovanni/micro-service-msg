const bunyan = require('bunyan');

const logger = bunyan.createLogger({ name: 'telegram-bot' });

module.exports = logger;
