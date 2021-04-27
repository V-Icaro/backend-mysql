const express = require('express');
const bodyParser = require('body-parser');

const { router } = require('./src/routes/routes');

const app = express();

app.use(bodyParser.json)
app.use(router)

app.listen(3000, () => {
    console.log('server on')
})