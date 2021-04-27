const express = require('express');
const bodyParser = require('body-parser');

const { router } = require('./src/routes/routes');

const app = express();



try {
    app.use(bodyParser.json())
    app.use(router)

    app.listen(3000, () => {
        console.log('Servidor Run...')
    })
} catch (error) {
    console.log(error)
}