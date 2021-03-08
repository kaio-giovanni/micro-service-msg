const { api } = require('./api');
const { serviceUrl } = require('../dotEnv');
const { catchError } = require('../error/catchError');
const logger = require('../logger');

const registerUser = ({ userName, chatId }) => {
  api
    .post(`${serviceUrl}/user/register`, { userName, chatId })
    .then(() => {
      logger.info('User successfully registered');
      return true;
    })
    .catch((error) => {
      catchError({ error: error.data });
      return false;
    });
};

exports.registerUser = registerUser;
