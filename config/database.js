const mysql = require("mysql2");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "belajar-database",
});

db.connect();

module.exports = 
{
    db
}