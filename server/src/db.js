// conexão com o banco
async function connect() {
  // verificação de conexão
  if (global.connection && global.connection.state !== "disconnected")
    return global.connection;

  const mysql = require("mysql2/promise");
  const connection = await mysql.createConnection(
    "mysql://root@localhost:3306/teste_infomarket"
  );

  // variável global de conexão com o banco
  global.connection = connection;
  console.log("Connection Success");

  return connection;
}

module.exports = { connect };
