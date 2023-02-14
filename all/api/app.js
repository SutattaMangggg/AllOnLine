var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: 'us-east.connect.psdb.cloud',
    user: 'iuvpnu3uenpm7wlznbjc',
    password: 'pscale_pw_5UQGMPGNcweTeWAnF9qcpiuUbsG30ikreRNvAL8LPpg',
    database: 'all_online',
    port: 3306,
    ssl: {
        rejectUnauthorized: false
    }
});
connection.connect();
app.get('/products', function (req, res, next) {
  connection.query('SELECT  * FROM products ', function (error, results, fields) {
      if (error) throw error;
      res.json(results)
    });
})


app.listen(3001, function () {
  console.log('CORS-enabled web server listening on port 3001')
})