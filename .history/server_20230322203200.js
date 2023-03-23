const express = require('express');
const app = express();

// Define a rota para a página principal
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
// Define a rota para a página de cadastro de clientes
app.get('/clientes/cadastro', (req, res) => {
  res.sendFile(__dirname + '/cadastro.html');
});


// Define a rota para uma página de consulta de clientes
app.get('/clientes', (req, res) => {
  // Executa a consulta ao banco de dados
  const sql = 'SELECT * FROM clientes';
  connection.query(sql, (err, result) => {
    if (err) throw err;
    // Envia a página HTML com os resultados da consulta
    res.send(`<!DOCTYPE html>
      <html>
        <head>
          <title>Consulta de Clientes</title>
        </head>
        <body>
          <h1>Consulta de Clientes</h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              ${result.map(row => `
                <tr>
                  <td>${row.id}</td>
                  <td>${row.nome}</td>
                  <td>${row.email}</td>
                </tr>
              `)}
            </tbody>
          </table>
        </body>
      </html>`);
  });
});

// Inicia o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000.');
});
