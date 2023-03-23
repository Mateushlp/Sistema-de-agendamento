const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'mateus1',
  password: '123456',
  database: 'agendamento'
});

connection.query('SELECT * FROM `agendamento`', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});

connection.end();
