// const express = require("express");
// const router = require("./routes/index");

// const server = express();

const { conn } = require("./DB_connection");
require("dotenv").config();

const { PORT } = process.env;

// //El middleware (CORS) a continuación establece los headers para permitir el acceso al servidor por parte del cliente
// //Cors es un protocolo de comunicación para comunicación entre dos puntos.
// server.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//   next();
// });

// //En lugar de lo anterior, puedo instalar cors y utilizar su middleware:
// // Lo instalo -> npm install cors
// // Lo importo -> const cors=require('cors')
// // Llamo el middleware -> server.use(cors())

// server.use(express.json());

// server.use('/rickandmorty',router)

const server = require("./app");

server.listen(PORT, async () => {
  await conn.sync({ force: false });
  console.log(`Server raised in port ${PORT}`);
});
