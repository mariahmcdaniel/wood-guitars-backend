// // path: ./config/env/production/database.js

// const { parse } = require("pg-connection-string");

// module.exports = ({ env }) => {
//   const { host, port, database, user, password } = parse(env("DATABASE_URL"));
  
//   return {
//     connection: {
//       client: 'postgres',
//       connection: {
//         host,
//         port,
//         database,
//         user,
//         password,
//         ssl: { rejectUnauthorized: false },
//       },
//       debug: false,
//     },
//   }
// };


const mysql = require("mysql2");

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  var connection = mysql.createConnection({
    host: env('DATABASE_HOST', 'localhost'),
    port: env.int('DATABASE_PORT', 5432),
    user: env('DATABASE_USERNAME', 'strapi'),
    dialect: 'mysql',
    password: env("DATABASE_PASSWORD", "strapi"),
    database: env('DATABASE_NAME', 'strapi'),
  });
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;