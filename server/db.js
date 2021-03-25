const mysql = require('mysql2');

const db = mysql.createConnection({
  host: '13.58.46.116', // change to the IPv4 Public IP Address
  user: 'root',
  password: 'password',
  database: 'reviewsAPI',
  port: 3306,
});

db.connect((err) => {
  if (err) { throw err; }
});

module.exports = db;
