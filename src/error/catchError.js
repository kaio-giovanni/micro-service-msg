const logger = require('../logger');
const { sendSentryException, makeSentryTransaction } = require('../utils/sentryUtils');

const catchError = ({ error }) => {
  const transaction = makeSentryTransaction();
  sendSentryException({ error });
  logger.error(error);
  transaction.finish();
};

exports.catchError = catchError;
