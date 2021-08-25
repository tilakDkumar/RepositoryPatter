


const mysql = require('mysql2');
var dbOptions = {
    host: "localhost",
    port: "3306",
    user: "root",
    password: "Root@123",
    database: "userform",
    charset: 'utf8mb4'
}
const connection = mysql.createConnection(dbOptions);
connection.connect((err) => {
    if (err) throw err;
    console.log(" connected to Mysql ")
})
exports.get = function () {
    return connection;
}

