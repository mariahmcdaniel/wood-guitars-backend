const crypto = require('crypto');

module.exports = ({ env }) => ({
  'users-permissions': {
      config: {
        jwtSecret: env('STRAPI_JWT_SECRET') || crypto.randomBytes(16).toString('base64'),
      },
    },
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  graphql: {
    config: {
       endpoint: "/graphql",
       shadowCRUD: true,
       playgroundAlways: true,
       depthLimit: 100,
       apolloServer: {
         tracing: false,
         },
       },
    },
});
