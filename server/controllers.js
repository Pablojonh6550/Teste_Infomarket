// carrega todas as pessoas presentes no banco
async function selectAllPeople() {
  const conn = global.connection;
  const [rows] = await conn.query(
    "SELECT * FROM pessoa INNER JOIN endereco ON pessoa.endereco_id = endereco.id;"
  );
  return await rows;
}

// insere o endereço da pessoa no banco
async function insertAddress(request) {
  const conn = global.connection;

  const sql =
    "INSERT INTO endereco(rua, numero, bairro, cep) VALUES (?,?,?,?);";
  const values = [request.rua, request.numero, request.bairro, request.cep];
  const query = await conn.query(sql, values).then((result) => {
    return result;
  });

  return query[0].insertId;
}

// insere os dados da pessoa no banco
async function insertPeople(request) {
  const addressId = await insertAddress(request.address);
  const conn = global.connection;

  const sql = "INSERT INTO pessoa(nome, endereco_id, idade) VALUES (?,?,?)";
  const values = [request.nome, addressId, request.idade];

  await conn.query(sql, values);
}

async function updateAdress(id, request) {
  const conn = global.connection;

  const sqlSelect = "SELECT endereco_id FROM pessoa WHERE id=?";
  const sqlValue = [id];

  const adressId = conn.query(sqlSelect, sqlValue);

  const sql = "UPDATE endereco SET rua=?, numero=?, bairro=?, cep=? WHERE id=?";
  const values = [
    request.rua,
    request.numero,
    request.bairro,
    request.cep,
    adressId,
  ];

  await conn.query(sql, values);
}

async function updatePeople(id, request) {
  await updateAdress(request.id, request.adress);
  const conn = global.connection;

  const sql = "UPDATE pessoa SET nome=?, idade=? WHERE id=?";
  const values = [request.nome, request.idade, id];

  await conn.query(sql, values);
  console.log("foi");
}

async function deletePeople(id) {
  const conn = global.connection;

  const sql = "DELETE FROM pessoa WHERE id=?";
  const values = [request.id];

  await conn.query(sql, values);
}
module.exports = { selectAllPeople, insertPeople, updatePeople, deletePeople };
