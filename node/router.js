const router = require('koa-router')();
const index = require('./index.js');

router.get('/getUser', index.getUser);

module.exports = router;