const keys = require('../keys/keys.js')
const { Pool } = require('pg');

const pool = new Pool({
    connectionString:keys.sqlURI,
    ssl: {
      rejectUnauthorized: false
    }
  });


pool.connect();

module.exports = pool;