const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'db'
});

connection.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySql Connected...')
})

module.exports = { connection }