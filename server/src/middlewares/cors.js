const cors = require('cors');
require('dotenv').config();

const { SERV_PORT, CLIENT_PORT } = process.env;

module.exports = cors({
  origin: [`http://localhost:${SERV_PORT}`, `http://localhost:${CLIENT_PORT}`],
  credentials: true,
});
