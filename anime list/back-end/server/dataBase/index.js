const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: `anime_list_DB`,
});

connection.connect(function (err) {
  if (err) console.log("Error to connect to database", err);
  else console.log("Database connected");
});

module.exports = connection;
