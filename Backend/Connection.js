var mysql =require('mysql2');
require('dotenv').config();

var con = mysql.createConnection({
    host: process.env.HOSTNAME,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DATABASE,
  });
  
  con.connect(function(err){
    if (err) throw (err);
    let createTableQuery = `CREATE TABLE IF NOT EXISTS mycode (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(255) NOT NULL,
      prefLang VARCHAR(255) NOT NULL,
      stdIn TEXT,
      sourceCode TEXT,
      timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );`;
  
    con.query(createTableQuery, (err, results) => {
      if (err) throw err;
    });
  });
  con.connect();
  module.exports = con;