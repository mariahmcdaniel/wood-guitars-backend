const crypto = require('crypto');

module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'oVnFziDZp8FIxmgJppD0PA=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'ifWh4QdWqaAwvf5i5aHLjQ=='),
    },
  },
});
