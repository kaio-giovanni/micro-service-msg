require('dotenv').config();

exports.telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
exports.sentryDsn = process.env.SENTRY_DSN;
exports.rabbitmqUrl = process.env.RABBITMQ_URL;
exports.serviceUrl = process.env.SERVICE_URL;
