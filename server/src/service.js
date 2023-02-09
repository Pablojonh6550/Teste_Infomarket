// carrega todas as pessoas presentes no banco
async function selectAllPeople() {
  const conn = global.connection;
  const [rows] = await conn.query(
    `SELECT
      P.id,	
      P.nome,
      P.idade,
      E.id AS endereco_id,
      E.rua,
      E.numero,
      E.bairro,
      E.cep
    FROM pessoa AS P 
    INNER JOIN endereco AS E ON P.id = E.pessoa_id;`
  );
  return await rows;
}

// insere o endereço da pessoa no banco
async function insertAddress(personId, data) {
  const conn = global.connection;

  const sql =
    "INSERT INTO endereco(pessoa_id, rua, numero, bairro, cep) VALUES (?,?,?,?,?);";
  const values = [
    personId,
    data.road,
    data.number,
    data.neighborhood,
    data.cep,
  ];

  await conn.query(sql, values);
}

// insere os dados da pessoa no banco
async function insertPeople(data) {
  const conn = global.connection;

  const sql = "INSERT INTO pessoa(nome, idade) VALUES (?,?)";
  const values = [data.name, data.age];

  const personId = await conn.query(sql, values).then((result) => {
    return result[0].insertId;
  });
  await insertAddress(personId, data.address);
  return personId;
}

async function updatePeople(peopleId, data) {
  const conn = global.connection;

  const sql = `
    UPDATE pessoa AS P 
    JOIN endereco AS E 
      ON E.pessoa_id = P.id 
    SET 
      P.nome=?,
      P.idade=?, 
      E.rua=?,
      E.numero=?, 
      E.bairro=?, 
      E.cep=?
    WHERE P.id=?`;
  const values = [
    data.name,
    data.age,
    data.address.road,
    data.address.number,
    data.address.neighborhood,
    data.address.cep,
    peopleId,
  ];

  return await conn.query(sql, values);
}

async function deletePeople(id) {
  const conn = global.connection;

  const sql = "DELETE FROM pessoa WHERE id=?";
  const values = [id];

  return await conn.query(sql, values);
}
module.exports = { selectAllPeople, insertPeople, updatePeople, deletePeople };
