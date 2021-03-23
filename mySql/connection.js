const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'host.docker.internal',
  user: 'root',
  password: 'password',
  database: 'reviewsAPI',
  // port: 3306,
});

connection.connect((err) => {
  if (err) { throw err; }
});

module.exports = connection;
