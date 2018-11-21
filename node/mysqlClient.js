const mysql = require('mysql');

const client = mysql.createConnection({
  host: '112.74.55.229',
  user: 'root',
  password: '123456',
  database: 'sanbao',
  port: 3306
});

module.exports = {
  client
};
