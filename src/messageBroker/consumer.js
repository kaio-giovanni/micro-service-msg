const connection = require('./connection');
const logger = require('../logger');
const { sendSentryException, makeSentryTransaction } = require('../utils/sentryUtils');

const createConsumer = async (queue, callback) => {
  const channel = await connection.getChannel();
  await channel.assertQueue(queue, {
    durable: false,
  });
  channel.consume(
    queue,
    (msg) => {
      const transaction = makeSentryTransaction();
      try {
        const payload = JSON.parse(msg.content.toString());
        callback(payload);
      } catch (err) {
        sendSentryException({ error: err });
        logger.error(err);
      } finally {
        transaction.finish();
      }
    },
    {
      noAck: true,
    },
  );
};

exports.createConsumer = createConsumer;
