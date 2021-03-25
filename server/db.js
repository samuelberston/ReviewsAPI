const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost', // change to the AWS connection
  user: 'root',
  password: 'password',
  database: 'reviewsAPI',
  port: 3306,
});

db.connect((err) => {
  if (err) { throw err; }
});

module.exports = db;
