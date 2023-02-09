const app = require("./app.js");
const { connect } = require("./db.js");

connect()
  .then(async () => {
    // inicialização do servidor
    app.listen(3333, () => {
      console.log("SERVER RUNNING: http://localhost:3333");
    });
  })
  .catch((error) => {
    console.error(`ERROR ON CONNECTION DATABASE: ${error}`);
  });
