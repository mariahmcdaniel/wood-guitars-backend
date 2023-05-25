const mysql = require("mysql2");

const { config } = mysql.createConnection(process.env.JAWSDB_URL);

module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});

// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   var connection = mysql.createConnection({
//     host: env('JAWSDB_HOST', 'localhost'),
//     port: env.int('JAWSDB_PORT', 3306),
//     user: env('JAWSDB_USERNAME', 'strapi'),
//     dialect: 'mysql',
//     password: env("JAWSDB_PASSWORD", "strapi"),
//     database: env('JAWSDB_DATABASE', 'strapi'),
//     ssl: {
//       rejectUnauthorized: false
//     },
//   });
// }

// // Make connection.
// connection.connect(function(err) {
//   if (err) {
//     console.error("there has been an error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id: " + connection.threadId);
// });

// // Export connection for our ORM to use.
// module.exports = connection;

