const Sentry = require('@sentry/node');

const makeSentryTransaction = () => {
  Sentry.init({
    tracesSampleRate: 1.0,
    environment: 'test',
  });

  const transaction = Sentry.startTransaction({
    op: 'telegram-bot',
    name: 'Telegram bot Transaction',
  });

  return transaction;
};

const sendSentryException = ({ error, projectName = 'telegram-bot' }) => {
  Sentry.configureScope((scope) => {
    scope.setTag('projectName', projectName);
    scope.setExtra('error', error);
  });

  Sentry.captureException(error);
};

const sendSentryMessage = ({ message, projectName = 'telegram-bot' }) => {
  Sentry.configureScope((scope) => {
    scope.setTag('projectName', projectName);
    scope.setExtra('message', message);
  });

  Sentry.captureMessage(message);
};

exports.makeSentryTransaction = makeSentryTransaction;
exports.sendSentryException = sendSentryException;
exports.sendSentryMessage = sendSentryMessage;
