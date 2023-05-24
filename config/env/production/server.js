module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.init(JAWSDB_PORT, 3306),
  url: env('MY_HEROKU_URL'),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});