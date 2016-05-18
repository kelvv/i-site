const app = require('../app');
const env = require('../config/env');

console.log('--------------Server on 3000---------------------');
app.listen(env.PORT);
