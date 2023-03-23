const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'mateus1',
  password: '123456',
  database: 'agendamento'
});

connection.connect((error) => {
  if (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  } else {
    console.log('Conexão bem-sucedida ao banco de dados!');
  }
});
