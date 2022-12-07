const cors = require('cors');
require('dotenv').config();

const { SERV_PORT, CLIENT_PORT } = process.env;

module.exports = cors({
  origin: [`http://localhost:${CLIENT_PORT}`, `http://localhost:${SERV_PORT}`],
  credentials: true,
});
