const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'reviewsAPI',
});

connection.connect((err) => {
  if (err) { console.log(err); }
});

module.exports = connection;
