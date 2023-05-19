import * as dotenv from "dotenv";
import mysql from "mysql2";

dotenv.config();

const db = mysql.createConnection({
  host: "localhost",
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: "booksdb",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database!");
});

export default db;
