var mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'reviews'
})

connection.connect((err) => {
  if (err) { console.log(err); }
  console.log('connected to mysql');
})

module.exports = connection;