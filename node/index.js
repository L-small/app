const resultModule = require('./format.js');
const mysqlClient = require('./mysqlClient');

const searchUser = (key, name, field) => {
  return new Promise((resolve, reject) => {
    const command = 'select * from user;'
    mysqlClient.client.query(command, (err, res) => {
      if (err) return;
      console.log(res);
    });
  })
}

const getUser = async function (ctx) {
  try {
    const res = await searchUser()
    ctx.body = resultModule.ok(res);
  } catch (e) {
    ctx.body = resultModule.err(500, e.message);
  }
  return ctx.body;
};


module.exports = {
  getUser
};
