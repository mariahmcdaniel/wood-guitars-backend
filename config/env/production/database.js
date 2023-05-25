const mysql = require("mysql2");

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  var connection = mysql.createConnection({
    host: env('JAWSDB_HOST', 'localhost'),
    port: env.int('JAWSDB_PORT', 3306),
    user: env('JAWSDB_USERNAME', 'strapi'),
    dialect: 'mysql',
    password: env("JAWSDB_PASSWORD", "strapi"),
    database: env('JAWSDB_DATABASE', 'strapi'),
    ssl: {
      rejectUnauthorized: false
    },
  });
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("there has been an error connecting: " + err.stack);
    return;
  }
  console.log("connected as id: " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;

