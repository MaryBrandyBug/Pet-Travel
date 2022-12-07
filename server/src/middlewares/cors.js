const cors = require('cors');
require('dotenv').config();

// const { SERV_PORT, CLIENT_PORT } = process.env;

module.exports = cors({
  origin: ['http://localhost:3001', 'http://localhost:3000'],
  credentials: true,
});
