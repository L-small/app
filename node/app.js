const Koa = require('koa');
const app = new Koa();
const route = require('./router.js');

app.use(route.routes())

app.listen(3001);