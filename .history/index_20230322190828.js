const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'seu_usuario_do_mysql',
  password: 'sua_senha_do_mysql',
  database: 'nome_do_banco_de_dados'
});

connection.connect((error) => {
  if (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  } else {
    console.log('Conexão bem-sucedida ao banco de dados!');
  }
});
