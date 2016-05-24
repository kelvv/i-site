const app = require('../app');
const env = require('../config/env');

console.log(`--------------Server on ${env.PORT}---------------------`);
app.listen(env.PORT);
