const axios = require('axios');

const { serviceUrl } = require('../dotEnv');

const api = axios.create({
  baseURL: serviceUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

exports.api = api;
