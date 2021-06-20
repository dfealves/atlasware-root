//Importa as dependências que acabamos de instalar
const express = require("express");
const path = require("path");
const cors = require("cors")

const app = express();

app.use(cors());
// Serve os arquivos estáticos da pasta dist (gerada pelo ng build)
app.use(express.static(__dirname + "/dist"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

// Inicia a aplicação pela porta configurada
app.listen(process.env.PORT || 8080);