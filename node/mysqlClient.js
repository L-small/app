const mysql = require('mysql');

const client = mysql.createConnection({
  host: '192.168.0.1',
  user: 'root',
  password: '123456',
  database: 'sanbao',
  port: 3306
});

module.exports = {
  client
};
