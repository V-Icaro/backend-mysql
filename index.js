const express = require('express');
const { router } = require('./src/routes/routes');

const app = express();

app.use(router)

app.listen(3000, () => {
    console.log('server on')
})