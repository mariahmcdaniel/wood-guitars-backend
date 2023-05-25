// module.exports = ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: process.env.PORT || 3306,
//   url: env('MY_HEROKU_URL'),
//   app: {
//     keys: env.array('APP_KEYS'),
//   },
//   webhooks: {
//     populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
//   },
// });

module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: process.env.PORT || env.int('PORT'),
  url: env("MY_HEROKU_URL", "https://eric-wood-guitars-backend.herokuapp.com/"),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS")|| [env("APP_KEY1"), env("APP_KEY2")],
  },
});