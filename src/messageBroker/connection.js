const amqp = require('amqplib');
const { rabbitmqUrl } = require('../dotEnv');

let connection = null;
let channel = null;

const getConnection = async () => {
  if (connection == null) {
    connection = await amqp.connect(rabbitmqUrl);
  }

  return connection;
};

const getChannel = async () => {
  if (channel == null) {
    const conn = await getConnection();
    channel = await conn.createChannel();
  }

  return channel;
};

const disconnect = async () => {
  if (channel != null) {
    await channel.close();
    channel = null;
  }

  if (connection != null) {
    await connection.close();
    connection = null;
  }
};

exports.getChannel = getChannel;
exports.disconnect = disconnect;
