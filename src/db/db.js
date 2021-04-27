const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'db'
});

function connectionDb() {
    return new Promise((resolve, reject) => {

        connection.connect((err) => {

            if (err) {
                console.error('error connecting: ' + err.stack);
                reject(err);
            }

            resolve(connection)
        });
    })
}

module.exports = { connectionDb }